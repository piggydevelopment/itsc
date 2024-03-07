#!/bin/sh

commit=$1
branch=$2 || master

git add .
git commit -m "$commit"
git push origin $2