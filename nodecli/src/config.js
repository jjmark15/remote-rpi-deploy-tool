const path = require('path');

function getProjectDir() {
  return path.join(__dirname, '../../');
}

module.exports = {
  projectDir: getProjectDir(),
};
