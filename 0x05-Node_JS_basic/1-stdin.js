console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const userName = data.toString().trim();
  process.stdout.write(`Your name is: ${userName}\r`);
  process.exit();
});
