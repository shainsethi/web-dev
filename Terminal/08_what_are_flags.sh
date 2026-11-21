#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

touch visible.txt .hidden
mkdir folder

echo "ls:"
ls
echo "ls -a:"
ls -a
echo "ls -l:"
ls -l
echo "ls -la:"
ls -la
echo "ls -l -a gives the same result:"
ls -l -a
