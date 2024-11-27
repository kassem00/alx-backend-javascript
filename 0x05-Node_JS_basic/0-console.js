const { spawn } = require('node:child_process');

let displayMessage = (data) => {
    process.stdout.write(`${data}`);
}

module.exports = displayMessage;
