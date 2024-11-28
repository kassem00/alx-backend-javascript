const displayMessage = (data) => {
  process.stdout.write(`${data}`);
  process.stdout.write('\n');
};

module.exports = displayMessage;
