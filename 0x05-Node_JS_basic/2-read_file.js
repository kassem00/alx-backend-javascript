const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    console.log('File does not exist');
    return;
  }

  try {
    const data = fs.readFileSync(absolutePath, 'utf-8');

    const rows = data.split('\n').filter((row) => row.trim() !== '');

    if (rows.length === 0) {
      console.log('No data available in the file');
      return;
    }

    const students = rows.slice(1).map((row) => {
      const [firstname, , , field] = row.split(','); // Removed lastname and age
      return { firstname, field };
    });

    const fieldCounts = students.reduce((acc, student) => {
      if (acc[student.field]) {
        acc[student.field].push(student.firstname);
      } else {
        acc[student.field] = [student.firstname];
      }
      return acc;
    }, {});

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
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
