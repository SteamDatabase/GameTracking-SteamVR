#!/bin/bash

cd "${0%/*}"
. ../common.sh

echo "Processing SteamVR..."

ProcessDepot ".so"
ProcessDepot ".dll"
ProcessVPK
ProcessToolAssetInfo
FixUCS2

# Prettify js/css
rm -r resources/webinterface/dashboard_prettier/
mkdir resources/webinterface/dashboard_prettier/
cp -r resources/webinterface/dashboard/**/*.js resources/webinterface/dashboard_prettier/
cp -r resources/webinterface/dashboard/**/*.css resources/webinterface/dashboard_prettier/
cp -r resources/webinterface/dashboard/*.js resources/webinterface/dashboard_prettier/
cp -r resources/webinterface/dashboard/*.css resources/webinterface/dashboard_prettier/
npm run prettier -- --write resources/webinterface/dashboard_prettier/

CreateCommit "$(cat bin/version.txt | grep -o '[0-9\.]*')" "$1"
