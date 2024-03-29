#!/bin/bash -x

VRBINDIR=$(cd $(dirname $0)/; pwd)
[[ -n $STEAMVR_VRENV ]] || exec "$VRBINDIR/vrenv.sh" "$0" "$@"

case $(uname) in
  Darwin)
    VRMONITOR=$STEAMVR_TOOLSDIR/bin/osx32/vrmonitor
    ;;
  Linux)
    VRMONITOR=$STEAMVR_TOOLSDIR/bin/linux64/vrmonitor
    ;;
  default)
    echo set QT_DIR
    exit 1
    ;;
esac

exec $DEBUGGER "$VRMONITOR" "$@"
