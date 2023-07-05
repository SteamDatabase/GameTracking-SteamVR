#!/bin/bash

set -eu

SCRIPT="$(basename "$0")"
DIR="$(dirname "$0")"
cd "${DIR}"
# Make it an absolute path
DIR="$(pwd)"

log () {
    echo "${SCRIPT}[$$]: $*" >&2 || :
}

# Re-exec through vrenv.sh first if necessary, which sets up scout LD_* and additional VR environment
VRBINDIR=$(cd $(dirname $0)/../../../bin; pwd)
[[ -n $STEAMVR_VRENV ]] || ( log "re-exec through vrenv.sh" ; exec "$VRBINDIR/vrenv.sh" "$0" "$@" )

# Tell run.sh to add the current working directory to the search path
export STEAM_COMPAT_FLAGS=search-cwd,search-cwd-first
export STEAM_COMPAT_INSTALL_PATH="${DIR}"

# No proxies required for localhost access
unset http_proxy
unset https_proxy

exec "${in_runtime[@]}" ./vrwebhelper "$@"

