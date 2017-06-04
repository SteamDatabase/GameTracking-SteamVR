#!/bin/bash

cd "${0%/*}"
. ../common.sh

echo "Processing SteamVR..."

#ProcessDepot ".dylib"
ProcessVPK

while IFS= read -r -d '' file
do
	mono ../.support/SourceDecompiler/Decompiler.exe -i "$file" -o "$(echo "$file" | sed -e 's/\.vpk$/\//g')"
done <   <(find . -type f -name "*_dir.vpk" -print0)

FixUCS2

CreateCommit "$(cat bin/version.txt | grep -o '[0-9\.]*')"
