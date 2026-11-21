#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "Hello" > index.html
echo "Untracked file:"
git status --short

git add index.html
echo "Staged file:"
git status --short

git commit -q -m "Add index"
echo "After commit:"
git status | tail -n 1

echo "Changed" >> index.html
echo "Modified file:"
git status --short
