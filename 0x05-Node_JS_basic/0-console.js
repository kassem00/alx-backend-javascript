const { spawn } = require('child_process');

let displayMessage = (data) => {
    process.stdout.write(`${data}`);
}

module.exports = displayMessage;
