#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q --bare -b main github.git
git clone -q github.git starter 2> /dev/null
cd starter
echo "# Demo Project" > README.md
git add README.md
git commit -q -m "Add README"
git push -q origin main
cd ..

git clone -q github.git my-copy
cd my-copy

echo "Files:"
ls
echo "Remote name:"
git remote
echo "History:"
git log --format=%s
