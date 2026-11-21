#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git --version

if ! git status > /dev/null 2>&1; then
  echo "This folder is not a Git repository yet"
fi

git init -q -b main
git status | head -n 1
