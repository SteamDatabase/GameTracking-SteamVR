#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"

export _ROOM_SETUP_LOG="${_ROOM_SETUP_LOG:-/tmp/SteamVRRoomSetup.log}"

log () {
	( echo "${BASENAME}[$$]: $*" | tee -a "${_ROOM_SETUP_LOG}" >&2 ) || :
}

if [ -z "${_ROOM_SKIP_DATE-}" ]; then
	log "=== $(date) ==="
	# so we only log this once through the run.sh execs etc.
	export _ROOM_SKIP_DATE=1
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

GAMEROOT="$(cd "$(dirname "$0")" && echo $PWD)"
cd "$GAMEROOT"

log exec "$GAMEROOT"/steamvr_room_setup "$@"
exec "$GAMEROOT"/steamvr_room_setup "$@"
