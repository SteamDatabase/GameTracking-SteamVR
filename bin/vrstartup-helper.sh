#!/bin/bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

BASENAME="$(basename "$0")"

log () {
    ( echo "${BASENAME}[$$]: $*" >&2 ) || :
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
