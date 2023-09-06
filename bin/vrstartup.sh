#!/bin/bash -x

VRBINDIR=$(cd $(dirname $0)/; pwd)

"$VRBINDIR/vrsetup.sh"

exec "$VRBINDIR/vrstartup-helper.sh"