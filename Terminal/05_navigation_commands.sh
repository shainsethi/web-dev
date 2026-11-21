#!/usr/bin/env bash
set -eu

practice=$(mktemp -d)
trap 'cd / && rm -rf -- "$practice"' EXIT
cd "$practice"

show() {
  echo "$1: practice${PWD#"$practice"}"
}

mkdir -p projects/website

show "Start"
cd projects
show "cd projects"
cd website
show "cd website"
cd ..
show "cd .."
cd website
cd ../..
show "cd ../.."
cd projects/website
show "cd projects/website"
cd - > /dev/null
show "cd -"
