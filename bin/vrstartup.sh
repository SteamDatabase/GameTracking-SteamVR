#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"

export STEAMVR_SETUP_LOG="${STEAMVR_SETUP_LOG:-/tmp/SteamVRLauncherSetup.log}"

log () {
	( echo "${BASENAME}[$$]: $*" | tee -a "${STEAMVR_SETUP_LOG}" >&2 ) || :
}

if [ -z "${_SKIP_DATE-}" ]; then
	log "=== $(date) ==="
	# so we only log this once through the vrenv.sh execs etc.
	export _SKIP_DATE=1
fi

if [ -n "${PRESSURE_VESSEL_RUNTIME-}" ]; then
	log "Steam Linux Runtime: ${PRESSURE_VESSEL_RUNTIME}"
elif [ -n "${STEAM_RUNTIME-}" ]; then
	log "WARNING: launching in legacy LDLP scout, please use sniper SLR"
else
	log "ERROR: no steam runtime environment set, please use sniper SLR"
	exit 1
fi

VRBINDIR="$(cd "$(dirname "$0")" && echo $PWD)"

# here first avoids doing it twice in vrsetup.sh, then vrstartup-helper.sh
if [ -z "${STEAMVR_VRENV-}" ]; then
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

log call "$VRBINDIR/vrsetup.sh"
"$VRBINDIR/vrsetup.sh"

log exec "$VRBINDIR/vrstartup-helper.sh"
exec "$VRBINDIR/vrstartup-helper.sh"
