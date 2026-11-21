#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q --bare -b main github.git

mkdir site
cd site
git init -q

echo "<h1>My Site</h1>" > index.html
git add index.html
git commit -q -m "Add home page"

git branch -M main
git remote add origin ../github.git
git push -q -u origin main

echo "Remote name:"
git remote
echo "Tracking status:"
git status -sb | head -n 1
echo "History on the remote:"
git --git-dir=../github.git log --format=%s
