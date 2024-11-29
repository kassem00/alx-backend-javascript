console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const userName = data.toString().trim();
  process.stdout.write(`Your name is: ${userName}\n`);
  
  console.log('This important software is now closing');
  process.exit();
});
