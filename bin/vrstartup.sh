#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"
# the vrstartup executable has it's own logging to vrstartup.txt
# this captures the script launch work and stdout/stderr
LOGFILE=vrstartup-linux.txt

STEAM_BASE_FOLDER="${STEAM_BASE_FOLDER:-$(realpath ~/.steam/steam)}"
mkdir -p "${STEAM_BASE_FOLDER}/${STEAM_CLIENT_LOG_FOLDER:-logs}"

log () {
    ( echo "${BASENAME}[$$]: $*" >&2 ) || :
}

if [ -n "${PRESSURE_VESSEL_RUNTIME-}" ]; then
	log "Steam Linux Runtime: ${PRESSURE_VESSEL_RUNTIME}"
	logger="$(which srt-logger)"
else
	log "ERROR: no steam runtime environment set, please use sniper SLR"
	exit 1
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

VRBINDIR="$(cd "$(dirname "$0")" && echo $PWD)"

# here first avoids doing it twice in vrsetup.sh, then vrstartup-helper.sh
if [ -z "${STEAMVR_VRENV-}" ]; then
	log "Relaunch under vrenv."
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

log call "$VRBINDIR/vrsetup.sh"
"$VRBINDIR/vrsetup.sh"

log exec "$VRBINDIR/vrstartup-helper.sh"
exec "$VRBINDIR/vrstartup-helper.sh"
