process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', (data) => {
    const userName = data.toString().trim();
    process.stdout.write(`Your name is: ${userName}\n`);
    process.exit();
});
