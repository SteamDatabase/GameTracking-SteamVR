#!/bin/bash

QUIET=0

while [[ $# -gt 0 ]]; do 
	case "$1" in 
		--quiet) QUIET=1; shift ;; 
		*) break;; 
	esac 
done

if [[ "$QUIET" == "0" ]]; then
	set -x
fi

export STEAMVR_VRENV="$(readlink -f $0)"
export STEAMVR_TOOLSDIR=$(cd "$(dirname $STEAMVR_VRENV)/.."; pwd)
RUNTIMEDIR=$(cd "$STEAMVR_TOOLSDIR/../runtime"; pwd)
SDKDIR=$(cd "$STEAMVR_TOOLSDIR/../sdk"; pwd)

case $(uname) in
	Darwin)
		QT_DIR=$(cd "$STEAMVR_TOOLSDIR/../../src/do_not_distribute/qt/5.5.0/osx32"; pwd)
		export QT_PLUGIN_PATH="$QT_DIR/plugins"
		export DYLD_LIBRARY_PATH="$RUNTIMEDIR/bin:$RUNTIMEDIR/bin/osx32"
		export DYLD_FRAMEWORK_PATH="$QT_DIR/lib"
		;;
	Linux)
		if [ -z "$STEAM_RUNTIME" ]; then
			exec ~/.steam/root/ubuntu12_32/steam-runtime/run.sh "$0" "$@"
		fi

		VRSTARTUP="$STEAMVR_TOOLSDIR/bin/linux64/vrstartup"
		QT_DIR="$STEAMVR_TOOLSDIR/bin/linux64/qt"
		export LD_LIBRARY_PATH="$(pwd):$RUNTIMEDIR/bin/linux64:$SDKDIR/bin/linux64:$QT_DIR/lib:$STEAMVR_TOOLSDIR/bin/linux64${LD_LIBRARY_PATH+:$LD_LIBRARY_PATH}"
		export VRCOMPOSITOR_LD_LIBRARY_PATH="$LD_LIBRARY_PATH"
		;;
	default)
		echo set QT_DIR
		exit 1
		;;
esac

exec "$@"
