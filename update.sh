#!/bin/bash
set -euo pipefail

cd "${0%/*}"
. ../common.sh

echo "Processing SteamVR..."

ProcessDepot ".dll"
ProcessDepot ".exe"
ProcessDepot ".so"
ProcessVPK
ProcessToolAssetInfo
FixUCS2

# Prettify js/css
rm --recursive resources/webinterface/dashboard_prettier/ || true
rsync --archive --include="*/" --include="*.js" --include="*.css" --exclude="*" --prune-empty-dirs resources/webinterface/dashboard/ resources/webinterface/dashboard_prettier/
npm run prettier -- --write resources/webinterface/dashboard_prettier/ || true

CreateCommit "$(grep -o '[0-9\.]*' bin/version.txt)" "$1"

echo "Done."
