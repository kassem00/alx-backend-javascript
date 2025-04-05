// 1-stdin.js

// Display the welcome message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Set encoding for stdin to handle text input
process.stdin.setEncoding('utf8');

// Listen for readable data on stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) { // Data is available
    const name = chunk.trim(); // Remove trailing newlines
    process.stdout.write(`Your name is: ${name}\n`);
    // Don't exit here; wait for 'end' event
  }
});

// When input stream ends (Ctrl+D, Ctrl+C, or pipe finishes)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0); // Explicitly exit cleanly
});