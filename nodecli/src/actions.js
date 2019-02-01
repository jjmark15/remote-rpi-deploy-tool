const fs = require('fs').promises;
const config = require('./config');

function getOptionsList() {
  return fs.readdir(config.projectDir);
}

module.exports = {
  getOptionsList,
};
