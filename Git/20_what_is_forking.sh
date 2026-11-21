#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q --bare -b main original.git
git clone -q original.git maintainer 2> /dev/null
cd maintainer
echo "Open source project" > README.md
git add .
git commit -q -m "Start project"
git push -q origin main
cd ..

git clone -q --bare original.git my-fork.git
git clone -q my-fork.git work
cd work
git remote add upstream ../original.git

echo "Remotes:"
git remote

git switch -q -c fix-typo
echo "Fixed typo" >> README.md
git commit -q -am "Fix typo"
git push -q origin fix-typo

echo "Branches on my fork:"
git --git-dir=../my-fork.git branch --format='%(refname:short)'
echo "Branches on the original:"
git --git-dir=../original.git branch --format='%(refname:short)'

cd ../maintainer
echo "New feature" >> README.md
git commit -q -am "Add feature"
git push -q origin main

cd ../work
git switch -q main
git fetch -q upstream
git merge -q --ff-only upstream/main

echo "My main after syncing with the original:"
git log --format=%s
