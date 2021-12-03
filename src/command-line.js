#! /usr/bin/env node
const cleanGitRef = require('./');
const shell = require('shelljs'); // Remove!!
const copyPaste = require('copy-paste');

const input = process.argv[2];
const cleanedInput = cleanGitRef.clean(input).replaceAll('--', '-');
copyPaste.copy(cleanedInput);
shell.exec(`echo ${cleanedInput} copied to clipboard`);
