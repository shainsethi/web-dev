#!/usr/bin/env bash
set -eu

echo "Shell: bash $BASH_VERSION"
echo "cd is a: $(type -t cd)"
echo "ls is a: $(type -t ls)"
echo "echo is a: $(type -t echo)"
