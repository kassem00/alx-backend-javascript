const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  const absolutePath = path.resolve(filePath);
  console.log(`Checking if file exists at: ${absolutePath}`);

  // Check if the file exists
  if (!fs.existsSync(absolutePath)) {
    console.log('File does not exist');
    return; // Gracefully handle the missing file
  }

  // If file exists, try to read it synchronously
  try {
    const data = fs.readFileSync(absolutePath, 'utf-8');

    // Split the data into rows
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    if (rows.length === 0) {
      console.log('No data available in the file');
      return;
    }

    // Process CSV data
    const students = rows.slice(1).map((row) => {
      const [firstname, , , field] = row.split(','); // Removed lastname and age
      return { firstname, field };
    });

    // Count students in each field
    const fieldCounts = students.reduce((acc, student) => {
      if (acc[student.field]) {
        acc[student.field].push(student.firstname);
      } else {
        acc[student.field] = [student.firstname];
      }
      return acc;
    }, {});

    // Display the total number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Display the number of students in each field
    for (const field in fieldCounts) {
      // Check if field is a direct property (not from prototype)
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const fieldList = fieldCounts[field];
        console.log(`Number of students in ${field}: ${fieldList.length}. List: ${fieldList.join(', ')}`);
      }
    }
  } catch (error) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
