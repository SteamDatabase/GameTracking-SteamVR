#!/bin/bash -x

#
# Run in the Sniper runtime without launching from Steam.
# This is useful if you want to use SteamVR outside of Steam entirely,
# or launch it from some other way for your own usecases.
#
# This script is purely an example, nothing more, and will not handle if
# you have SteamLinuxRuntime_sniper and SteamVR installed in different Steam library dirs.
#

./vrsetup.sh

exec ../../SteamLinuxRuntime_sniper/run ./vrstartup-helper.sh

