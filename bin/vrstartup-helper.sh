#!/bin/bash -x

VRBINDIR=$(cd $(dirname $0)/; pwd)
[[ -n $STEAMVR_VRENV ]] || exec "$VRBINDIR/vrenv.sh" "$0" "$@"

case $(uname) in
	Linux)
		VRSTARTUP=$STEAMVR_TOOLSDIR/bin/linux64/vrstartup
		;;
	default)
		echo set QT_DIR
		exit 1
		;;
esac

exec $DEBUGGER "$VRSTARTUP" "$@"
