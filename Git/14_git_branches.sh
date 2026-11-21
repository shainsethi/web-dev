#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "Home" > home.txt
git add .
git commit -q -m "Add home"

git switch -q -c feature
echo "Login" > login.txt
git add .
git commit -q -m "Add login"

echo "Files on feature:"
ls

git switch -q main

echo "Files on main:"
ls

echo "History of feature:"
git log --format=%s feature
echo "History of main:"
git log --format=%s main
