/**
 * Logs a message to the console.
 * @param {string} message - The message to log.
 * @returns {void}
 */
const displayMessage = (data) => {
  process.stdout.write(`${data}`);
  process.stdout.write('\n');
};

/**
 * Exports the displayMessage function.
 * @module displayMessage
 * @function
 */
// Default module export.
module.exports = displayMessage;
