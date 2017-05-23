#!/bin/bash

cd "${0%/*}"
. ../common.sh

echo "Processing SteamVR..."

FixUCS2

CreateCommit "$(cat bin/version.txt)"
