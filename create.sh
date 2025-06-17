#!/bin/bash
rm -rf .gitignore;
rm -rf README.md;
mkdir css js;
touch README.md index.html;
touch css/style.css js/script.js;
echo "'use strict';" >> js/script.js;
tree;