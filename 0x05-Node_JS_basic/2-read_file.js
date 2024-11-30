const fs = require('fs');

function countStudents(file_name) {
  let dat;

  try {
    // Attempt to read the file synchronously
    dat = fs.readFileSync(file_name, 'utf8');
  } catch (err) {
    // If there's an error reading the file, throw an error with the message
    throw new Error('Cannot load the database');
  }

  const lines = dat.split('\n'); // Split data into lines
  const departments = {}; // Object to store department names as keys and student lists as values

  // Loop through the lines (skipping the header)
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (line === '') continue;

    const [firstname, lastname, age, field] = line.split(',');

    // If the department (field) doesn't exist, initialize it with an empty array
    if (!departments[field]) {
      departments[field] = [];
    }

    // Add the student's name to the appropriate department
    departments[field].push(`${firstname} ${lastname}`);
  }

  const numberOfStudents = Object.values(departments).flat().length;
  console.log(`Number of students: ${numberOfStudents}`);

  // Output the result
  for (const [field, students] of Object.entries(departments)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
}

// Export the function so it can be used in other files
module.exports = countStudents;
