#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

git init -q -b main project
cd project

git config user.name "Riya"
git config user.email "riya@example.com"

echo "Name: $(git config user.name)"
echo "Email: $(git config user.email)"
echo "Saved settings:"
git config --local --list | grep '^user\.'
