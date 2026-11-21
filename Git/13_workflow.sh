#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q --bare -b main github.git
git clone -q github.git work 2> /dev/null
cd work

echo "Step 1: edit a file"
echo "My project" > README.md

echo "Step 2: check status"
git status --short

echo "Step 3: stage"
git add README.md
git status --short

echo "Step 4: commit"
git commit -q -m "Add README"
git log --format=%s

echo "Step 5: push"
git push -q origin main
git status -sb | head -n 1
