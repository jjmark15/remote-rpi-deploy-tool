#! /usr/bin/env node

const program = require('commander');
const { version: projectVersion } = require('../package.json');
const config = require('./config');
const Console = require('./console');
const { getOptionsList } = require('./actions');

function cli() {
  program
    .version(projectVersion)
    .option('-p, --print-app-dir', 'print the directory containing this app')
    .option('-l, --list-actions', 'list action options')
    .parse(process.argv);

  if (program.printAppDir) Console.log(config.projectDir);
  if (program.listActions) getOptionsList().then(result => Console.log(result));
}

cli();
