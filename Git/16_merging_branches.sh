#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

echo "Home" > home.txt
git add .
git commit -q -m "Add home"

git switch -q -c navbar
echo "Navbar" > navbar.txt
git add .
git commit -q -m "Add navbar"

git switch -q main
git merge -q navbar

echo "Fast-forward merge:"
git log --format=%s

git switch -q -c footer
echo "Footer" > footer.txt
git add .
git commit -q -m "Add footer"

git switch -q main
echo "About" > about.txt
git add .
git commit -q -m "Add about"

git merge -q --no-edit footer

echo "Merge commit:"
git log --graph --format=%s
