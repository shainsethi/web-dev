#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

touch index.html
touch style.css app.js
touch "my notes.txt"

echo "Files created:"
ls -1

echo "Keep this text" > index.html
touch index.html

echo "touch keeps existing content:"
cat index.html
