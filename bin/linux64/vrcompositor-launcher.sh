#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
ROOT="$(cd "$(dirname "$0")" && echo $PWD)"
ARCH="$(uname -m)"

export _VRCOMPOSITOR_SETUP_LOG="${_VRCOMPOSITOR_SETUP_LOG:-/tmp/VRCompositorLaunch.log}"

log () {
	( echo "${BASENAME}[$$]: $*" | tee -a "${_VRCOMPOSITOR_SETUP_LOG}" >&2 ) || :
}

if [ -z "${_VRCOMPOSITOR_SKIP_DATE-}" ]; then
	log "=== $(date) ==="
	# so we only log this once through the run.sh execs etc.
	export _VRCOMPOSITOR_SKIP_DATE=1
fi

# Require LDLP scout runtime environment
# SteamVR is launching us via steam-runtime-launch-client, which is runtime neutral, so we are expected to have to do this
if [ -n "${STEAM_RUNTIME-}" ]; then
	log "Detected scout LDLP runtime."
	# continue
elif [[ "${ARCH}" == x86_64* ]]; then
	log "Relaunch under scout LDLP runtime."
	log exec "$HOME/.steam/root/ubuntu12_32/steam-runtime/run.sh" "$0" "$@"
	exec "$HOME/.steam/root/ubuntu12_32/steam-runtime/run.sh" "$0" "$@"
	# unreachable
else
	# unexpected
	log "No steam runtime detected, unknown arch ${ARCH} - continuing."
fi

if [ -z "${STEAMVR_VRENV-}" ]; then
	log "Relaunch under vrenv."
	VRBINDIR=${ROOT}/..
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

# NOTE: the vrcompositor-launcher stub does a bit of env manipulation and syscap work
log exec "$ROOT/vrcompositor-launcher" "$@"
exec "$ROOT/vrcompositor-launcher" "$@"
