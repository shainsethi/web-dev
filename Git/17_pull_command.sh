#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q --bare -b main github.git
git clone -q github.git riya 2> /dev/null
cd riya
echo "First line" > notes.txt
git add .
git commit -q -m "Add notes"
git push -q origin main
cd ..

git clone -q github.git aman

cd riya
echo "Second line" >> notes.txt
git commit -q -am "Update notes"
git push -q origin main
cd ../aman

echo "Aman before pull:"
cat notes.txt

git pull -q

echo "Aman after pull:"
cat notes.txt
