#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "color: blue" > style.txt
git add .
git commit -q -m "Set blue"

git switch -q -c feature
echo "color: green" > style.txt
git commit -q -am "Set green"

git switch -q main
echo "color: red" > style.txt
git commit -q -am "Set red"

if ! git merge feature > /dev/null 2>&1; then
  echo "Merge conflict in:"
  git diff --name-only --diff-filter=U
  echo "File with conflict markers:"
  cat style.txt
fi

echo "color: purple" > style.txt
git add style.txt
git commit -q --no-edit

echo "Resolved file:"
cat style.txt
echo "History:"
git log --graph --format=%s
