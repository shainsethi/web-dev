#!/usr/bin/env bash
source "$(dirname "${BASH_SOURCE[0]}")/practice_setup.sh"

mkdir project
cd project

echo "Before init:"
ls -a

git init -q -b main

echo "After init:"
ls -a

git status | head -n 1
