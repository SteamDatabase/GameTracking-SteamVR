#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
ROOT="$(cd "$(dirname "$0")" && echo $PWD)"

LOGFILE=vrroomsetup-linux.txt

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
	log "Relaunch under vrenv."
	VRBINDIR=${ROOT}/../../../runtime/bin
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

GAMEROOT="$(cd "$(dirname "$0")" && echo $PWD)"
cd "$GAMEROOT"

log exec "$GAMEROOT"/steamvr_room_setup "$@"
exec "$GAMEROOT"/steamvr_room_setup "$@"
