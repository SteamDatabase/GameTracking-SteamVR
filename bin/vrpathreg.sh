#!/bin/bash -x

VRBINDIR=$(cd $(dirname $0)/; pwd)
[[ -n $STEAMVR_VRENV ]] || exec "$VRBINDIR/vrenv.sh" "$0" "$@"

case $(uname) in
  Darwin)
    VRPATHREG=$STEAMVR_TOOLSDIR/bin/osx32/vrpathreg
    ;;
  Linux)
    VRPATHREG=$STEAMVR_TOOLSDIR/bin/linux64/vrpathreg
    ;;
  default)
    echo set QT_DIR
    exit 1
    ;;
esac

exec $DEBUGGER "$VRPATHREG" "$@"
