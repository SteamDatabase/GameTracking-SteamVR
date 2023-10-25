#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
GAMEROOT="$(cd "$(dirname "$0")" && echo $PWD)"

export _STEAMTOURS_SETUP_LOG="${_STEAMTOURS_SETUP_LOG:-/tmp/SteamVRTours.log}"

log () {
	( echo "${BASENAME}[$$]: $*" | tee -a "${_STEAMTOURS_SETUP_LOG}" >&2 ) || :
}

if [ -z "${_STEAMTOURS_SKIP_DATE-}" ]; then
	log "=== $(date) ==="
	# so we only log this once through the run.sh execs etc.
	export _STEAMTOURS_SKIP_DATE=1
fi

# Require LDLP scout runtime environment
# SteamVR is launching us via steam-runtime-launch-client, which is runtime neutral, so we are expected to have to do this
if [ -n "${STEAM_RUNTIME-}" ]; then
    log "Detected scout LDLP runtime."
    # continue
else
    log "Executing under scout LDLP runtime."
    log exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
    exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
    # unreachable
fi

ulimit -n 2048

# Set default thread size.
ulimit -Ss 1024

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
