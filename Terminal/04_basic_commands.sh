#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

touch notes.txt
mkdir projects

echo "pwd:"
pwd
echo "ls:"
ls
echo "date:"
date
echo "whoami:"
whoami
