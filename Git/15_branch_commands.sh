#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "Start" > app.txt
git add .
git commit -q -m "Start project"

echo "Current branch: $(git branch --show-current)"

git branch dev
git switch -q dev
echo "After switch: $(git branch --show-current)"

git switch -q -c login-draft
echo "After switch -c: $(git branch --show-current)"

git branch -m login-draft login
echo "After rename: $(git branch --show-current)"

git switch -q main
git branch -d login > /dev/null

echo "Branches left:"
git branch --format='%(refname:short)'
