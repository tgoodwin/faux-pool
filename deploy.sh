#!/bin/bash
if [-z "$1"]
then
    echo "Which folder do you want to deploy to gh-pages?"
    exit 1
fi
echo "pushing "$1" subtree to gh-pages branch."
git subtree push --prefix $1 origin gh-pages
