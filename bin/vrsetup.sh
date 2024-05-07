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

if [ -z "${STEAMVR_VRENV-}" ]; then
	log exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	exec "$VRBINDIR/vrenv.sh" "$0" "$@"
	# unreachable
fi

function SteamVRLauncherSetup()
{
	if [ -z "${PRESSURE_VESSEL_RUNTIME-}" ]; then

		# We are not under pressure-vessel - presumably we have been relaunched at host level via the steam launcher service
		# We still require the scout LDLP environment however, so consider one more relaunch
		if [ -n "${STEAM_RUNTIME-}" ]; then
			log "Detected scout LDLP runtime."
			# continue
		else
			log "Relaunching under scout LDLP runtime."
			log exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
			exec "$HOME/.steam/bin/steam-runtime/run.sh" "$0" "$@"
			# unreachable
		fi

		if ! [ -x "$(command -v getcap)" ]; then
			log 'Error: getcap is required to complete the SteamVR setup.'
			return 1
		fi

		if ! [ -x "$(command -v setcap)" ]; then
			log 'Error: setcap is required to complete the SteamVR setup.'
			return 1
		fi

		if [[ "$(getcap $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher)" == *"cap_sys_nice"* ]]; then
			log "$STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher binary has cap_sys_nice privileges"
			return 0
		fi

		# FIXME: see steamrt#397, similar to steam_msg.sh, for prompts..
		${VRBINDIR}/steamvr_question.sh "SteamVR requires superuser access to finish setup. Proceed?"
		if [ "$?" != "0" ]; then
		    log 'Error: user declined superuser request.'
		    return 1
		fi

		pkexec setcap CAP_SYS_NICE=eip $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher

		if ! [[ "$(getcap $STEAMVR_TOOLSDIR/bin/linux64/vrcompositor-launcher)" == *"cap_sys_nice"* ]]; then
			log 'Error: setcap of vrcompositor-launcher failed.'
			return 1
		fi

		return 0
	else
		log "Detected Steam Linux Runtime pressure-vessel launch in ${PRESSURE_VESSEL_RUNTIME}"
		if [ -z ${SRT_LAUNCHER_SERVICE_ALONGSIDE_STEAM-} ]; then
			log "Error: steam launcher service not available, vrcompositor-launcher will execute inside the container with no privileges."
		else
			log "Relaunching via steam launcher service to host level for vrcompositor setcap configuration."
			exec steam-runtime-launch-client --alongside-steam -- "$0" "$@"
			# unreachable
		fi
		return 0
	fi
}

SteamVRLauncherSetup

if [ "$?" != "0" ]; then
    # FIXME: see steamrt#397, easier to copy steam_msg.sh into the SteamVR depot than to try and locate it
    ${VRBINDIR}/steamvr_msg.sh --error "SteamVR setup is incomplete, some features might be missing. See ${LOGFILE-"Steam client logs folder"} for details."
fi
