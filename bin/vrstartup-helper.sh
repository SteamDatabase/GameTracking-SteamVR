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

VRBINDIR="$(cd "$(dirname "$0")" && echo $PWD)"

if [ -z "${STEAMVR_VRENV-}" ] ; then
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

VRSTARTUP=$STEAMVR_TOOLSDIR/bin/linux64/vrstartup

DEBUGGER=${DEBUGGER-}
log exec $DEBUGGER "$VRSTARTUP" "$@"
exec $DEBUGGER "$VRSTARTUP" "$@"
