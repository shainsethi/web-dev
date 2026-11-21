#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "Version one" > notes.txt
git add notes.txt
git commit -q -m "Add notes"

echo "Version two" > notes.txt
git add notes.txt
git commit -q -m "Update notes"

echo "History:"
git log --format=%s

echo "Current file:"
cat notes.txt

echo "Previous version is still saved:"
git show HEAD~1:notes.txt
