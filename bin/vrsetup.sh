#!/bin/bash -x

VRBINDIR=$(cd $(dirname $0)/; pwd)
[[ -n $STEAMVR_VRENV ]] || exec "$VRBINDIR/vrenv.sh" "$0" "$@"

SETUP_LOG=/tmp/SteamVRLauncherSetup.log

# Just a safety fallback, STEAM_ZENITY should be already setup via the vrenv.sh path above
if [ -z ${STEAM_ZENITY} ]; then
	export STEAM_ZENITY="zenity"
fi

function pErr()
{
	echo "$(date) - $@" >> $SETUP_LOG
}

function SteamVRLauncherSetup()
{
	if ! [ -x "$(command -v getcap)" ]; then
		pErr 'Error: getcap is required to complete the SteamVR setup.'
		return 1
	fi

	if ! [ -x "$(command -v setcap)" ]; then
		pErr 'Error: setcap is required to complete the SteamVR setup.'
		return 1
	fi

	if [[ "$(getcap $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher)" == *"cap_sys_nice"* ]]; then
		return 0
	fi

	if ! ${STEAM_ZENITY} --no-wrap --question --text="SteamVR requires superuser access to finish setup. Proceed?"; then
		pErr 'Error: user declined superuser request.'
		return 1
	fi

	pkexec setcap CAP_SYS_NICE=eip $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher

	if ! [[ "$(getcap $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher)" == *"cap_sys_nice"* ]]; then
		pErr 'Error: setcap of vrcompositor-launcher failed.'
		return 1
	fi

	return 0
}

SteamVRLauncherSetup
if [ "$?" != "0" ]; then
    ${STEAM_ZENITY} --no-wrap --info --text="SteamVR setup is incomplete, some features might be missing. See $SETUP_LOG for details.";
fi
