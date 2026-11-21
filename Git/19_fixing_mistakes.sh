#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "v1" > app.txt
git add .
git commit -q -m "Add app"

echo "mistake" > app.txt
git restore app.txt
echo "After restore: $(cat app.txt)"

echo "staged mistake" > app.txt
git add app.txt
git restore --staged app.txt
echo "After restore --staged:"
git status --short
git restore app.txt

echo "v2" > app.txt
git commit -q -am "Updte app"
git commit -q --amend -m "Update app"
echo "After amend: $(git log -1 --format=%s)"

git reset -q --soft HEAD~1
echo "After reset --soft:"
git status --short
git commit -q -m "Update app"

git revert --no-edit HEAD > /dev/null
echo "After revert: $(cat app.txt)"
git log --format=%s

git reset -q --hard HEAD~1
echo "After reset --hard: $(cat app.txt)"
git log --format=%s
