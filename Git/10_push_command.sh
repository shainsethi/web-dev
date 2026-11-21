#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q --bare -b main github.git
git clone -q github.git work 2> /dev/null
cd work

echo "First" > notes.txt
git add notes.txt
git commit -q -m "First commit"
git push -q origin main

echo "Second" >> notes.txt
git commit -q -am "Second commit"

echo "Before push:"
git status -sb | head -n 1

git push -q origin main

echo "After push:"
git status -sb | head -n 1

echo "History on the remote:"
git --git-dir=../github.git log --format=%s
