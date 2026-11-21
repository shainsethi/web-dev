#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

mkdir notes
mkdir html css js
mkdir "my projects"
mkdir -p app/src/components

if ! mkdir notes 2> /dev/null; then
  echo "mkdir fails when the folder already exists"
fi

mkdir -p notes
echo "mkdir -p does not fail on an existing folder"

echo "Folders created:"
find . -mindepth 1 -type d | LC_ALL=C sort
