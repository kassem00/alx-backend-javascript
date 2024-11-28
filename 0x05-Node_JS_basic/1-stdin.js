console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const userName = data.toString().trim();
  console.log(`Your name is: ${userName}`);
  process.exit();
});
