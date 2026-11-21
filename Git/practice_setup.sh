#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

unset GIT_DIR GIT_WORK_TREE GIT_INDEX_FILE
export GIT_CEILING_DIRECTORIES="$practice"
export GIT_CONFIG_GLOBAL=/dev/null
export GIT_CONFIG_NOSYSTEM=1
export GIT_AUTHOR_NAME="Riya"
export GIT_AUTHOR_EMAIL="riya@example.com"
export GIT_COMMITTER_NAME="Riya"
export GIT_COMMITTER_EMAIL="riya@example.com"
