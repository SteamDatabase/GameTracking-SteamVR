#!/bin/bash

cd "${0%/*}"
. ../common.sh

echo "Processing SteamVR..."

ProcessDepot ".so"
ProcessVPK
FixUCS2

CreateCommit "$(cat bin/version.txt | grep -o '[0-9\.]*')" "$1"
