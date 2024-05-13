#!/usr/bin/env bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

if [ "${XDG_CURRENT_DESKTOP-}" == "gamescope" ]; then
	echo "FIXME: $0 not functional under gamescope, early out"
	exit
fi

# STEAM_ZENITY should be setup via steam.sh startup already, execution of this block is not expected
if [ -z ${STEAM_ZENITY-} ]; then
	echo "STEAM_ZENITY is not set!"
	export SYSTEM_ZENITY="$(which zenity 2>/dev/null)"
	if [ -z ${SYSTEM_ZENITY-} ]; then
		export STEAM_ZENITY="zenity"
	else
		# FIXME: host zenity may fail because of the scout LD_* edits and should be run under SYSTEM_LD_LIBRARY_PATH
		export STEAM_ZENITY="${SYSTEM_ZENITY}"
	fi
fi

if [ -n ${SYSTEM_ZENITY-} ]; then
	# We are actually going to use host zenity per steam.sh or the above, make sure to remove the scout paths
	echo "Using host zenity for question"
	export LD_LIBRARY_PATH="${SYSTEM_LD_LIBRARY_PATH-}"
fi

"${STEAM_ZENITY}" --no-wrap --question --text="$1"
