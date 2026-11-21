#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "A" > a.txt
echo "B" > b.txt
echo "C" > c.txt

git add a.txt
echo "After adding one file:"
git status --short

git commit -q -m "Add a"

git add .
echo "After adding everything:"
git status --short

git commit -q -m "Add b and c"

echo "Updated" >> a.txt
git commit -q -am "Update a"

echo "History:"
git log --format=%s
