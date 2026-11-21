#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

touch old.txt keep.txt
mkdir empty
mkdir -p full/inner
touch full/inner/file.txt

rm old.txt
echo "After rm old.txt:"
ls -1

rmdir empty
echo "After rmdir empty:"
ls -1

if ! rmdir full 2> /dev/null; then
  echo "rmdir refuses a folder that is not empty"
fi

rm -r full
echo "After rm -r full:"
ls -1
