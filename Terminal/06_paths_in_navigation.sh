#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

mkdir -p site/css site/js
touch site/css/style.css site/js/app.js

echo "Absolute path:"
ls "$practice/site/css"

echo "Relative path:"
ls site/css

cd site/js

echo "Current folder with .:"
ls .

echo "Sibling folder with ..:"
ls ../css

if [ -d ~ ]; then
  echo "~ points to your home folder"
fi
