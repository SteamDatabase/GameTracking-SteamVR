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

# Steam runtime 'heavy' is a newer runtime than the default Steam runtime (scout)
# steamwebhelper and libcef.so are built for this newer environment,
# See http://repo.steampowered.com/steamrt/steamrt-heavy/ for details

# STEAM_RUNTIME_HEAVY is a debug tool that can be used in the same way as STEAM_RUNTIME in steam.sh,
# to override the location of the heavy runtime libraries

if [ "${STEAM_RUNTIME-}" = "0" ]; then
    log "Runtime disabled by environment (this is unsupported)"
    unset STEAM_RUNTIME_HEAVY
    in_runtime=()
    export LD_LIBRARY_PATH="${DIR}${SYSTEM_LIBRARY_PATH:+":$SYSTEM_LIBRARY_PATH"}"
elif [ -z "${STEAM_RUNTIME_HEAVY-}" ]; then
    export STEAM_RUNTIME_HEAVY="${DIR}/steam-runtime-heavy"
    log "Runtime defaulting to $STEAM_RUNTIME_HEAVY"
    # We might need to bootstrap from the archive
    in_runtime=( \
        "$DIR/steam-runtime-heavy.sh" \
        --unpack-dir="$DIR" \
        --runtime=steam-runtime-heavy \
        -- \
    )
else
    log "Runtime overridden to $STEAM_RUNTIME_HEAVY"
    STEAM_RUNTIME_HEAVY=$(readlink -f "$STEAM_RUNTIME_HEAVY")
    export STEAM_RUNTIME_HEAVY
    in_runtime=( \
        "$STEAM_RUNTIME_HEAVY/scripts/switch-runtime.sh" \
        --runtime="$STEAM_RUNTIME_HEAVY" \
        -- \
    )
fi

# No proxies required for localhost access
unset http_proxy
unset https_proxy

exec "${in_runtime[@]}" ./vrwebhelper "$@"

