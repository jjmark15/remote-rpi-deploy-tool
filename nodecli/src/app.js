#! node

const program = require('commander');
const { version: projectVersion } = require('../package.json');
const config = require('./config');
const Console = require('./console');

function cli() {
  program
    .version(projectVersion)
    .option('-p, --print-app-dir', 'Print the directory containing this app')
    .parse(process.argv);

  if (program.printAppDir) Console.log(config.projectDir);
}

cli();
