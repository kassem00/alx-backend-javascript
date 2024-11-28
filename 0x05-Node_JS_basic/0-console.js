const x = require('child_process');

const displayMessage = (data) => {
  x.process.stdout.write(`${data}` + "\n");
};

module.exports = displayMessage;
