#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
GAMEROOT="$(cd "$(dirname "$0")" && echo $PWD)"

LOGFILE=vrsteamtours-linux.txt

STEAM_BASE_FOLDER="${STEAM_BASE_FOLDER:-$(realpath ~/.steam/steam)}"
mkdir -p "${STEAM_BASE_FOLDER}/${STEAM_CLIENT_LOG_FOLDER:-logs}"

log () {
    ( echo "${BASENAME}[$$]: $*" >&2 ) || :
}

# Require LDLP scout runtime environment
# SteamVR is launching us via steam-runtime-launch-client, which is runtime neutral, so we are expected to have to do this
if [ -n "${STEAM_RUNTIME-}" ]; then
	log "Detected scout LDLP runtime."
	# We can only start logging once we have srt-logger availability, so we miss capturing the first LDLP relaunch
	logger="${STEAM_RUNTIME}/amd64/usr/bin/srt-logger"
	# continue
else
	log "Relaunch under scout LDLP runtime."
	log exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
	exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
	# unreachable
fi

if [ -x "$logger" ]; then
	# Prevent multiple opens through vrenv.sh relaunch
	if [ -z "${_STEAMVR_LOGGING_READY-}" ]; then
		# Send stdout to a subprocess that copies its stdin to the log file,
		# maybe the terminal, and maybe the systemd Journal; then send stderr
		# to the same place as stdout
		exec > >( exec "$logger" --exec-fallback --filename=${LOGFILE} ) 2>&1
		export _STEAMVR_LOGGING_READY=1
	fi
else
	log "WARNING: $logger not found, logging disabled"
fi

if [ -z "${STEAMVR_VRENV-}" ]; then
	log "Relaunch under vrenv"
	# SteamVR depot layout
	VRBINDIR="${GAMEROOT}/../../../bin"
	if [ ! -d "${VRBINDIR}" ]; then
		# Internal dev setup has a different layout
		VRBINDIR=$(realpath -L "${GAMEROOT}/../../../runtime/bin")
		if [ "$?" != "0" ]; then
			log "Error: VRBINDIR lookup failed, check your installation"
			exit 1
		fi
	fi
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

ulimit -n 2048

# Set default thread size.
ulimit -S -s 1024

# and launch the game
cd "$GAMEROOT"

GAMEEXE=bin/linuxsteamrt64/steamtours
export LD_LIBRARY_PATH="${GAMEROOT}"/bin/linuxsteamrt64:$LD_LIBRARY_PATH

STATUS=42
while [ $STATUS -eq 42 ]; do
	if [ "${GAME_DEBUGGER-}" == "gdb" ] || [ "${GAME_DEBUGGER-}" == "cgdb" ]; then
		ARGSFILE=$(mktemp $USER.steamtours.gdb.XXXX)
		echo b main > "$ARGSFILE"

		# Set the LD_PRELOAD varname in the debugger, and unset the global version. This makes it so that
		#   gameoverlayrenderer.so and the other preload objects aren't loaded in our debugger's process.
		echo set env LD_PRELOAD=$LD_PRELOAD >> "$ARGSFILE"
		echo show env LD_PRELOAD >> "$ARGSFILE"
		echo set disable-randomization off >> "$ARGSFILE"
		unset LD_PRELOAD

		echo run $@ >> "$ARGSFILE"
		echo show args >> "$ARGSFILE"
		"${GAME_DEBUGGER}" "${GAMEROOT}"/${GAMEEXE} -x "$ARGSFILE"
		rm "$ARGSFILE"
	elif [ "${GAME_DEBUGGER-}" == "lldb" ]; then
		"${GAME_DEBUGGER}" "${GAMEROOT}"/${GAMEEXE} -- $@
	else
		GAME_DEBUGGER="${GAME_DEBUGGER-}"
		${GAME_DEBUGGER} "${GAMEROOT}"/${GAMEEXE} "$@"
	fi
	STATUS=$?
done
exit $STATUS
