const readlineSync = require('readline-sync');

function calculateGrade(marks) {
  if (marks < 0 || marks > 100) {
    return 'Invalid input';
  } else if (marks >= 90) {
    return 'Grade S';
  } else if (marks >= 80) {
    return 'Grade A';
  } else if (marks >= 70) {
    return 'Grade B';
  } else if (marks >= 60) {
    return 'Grade C';
  } else if (marks >= 50) {
    return 'Grade D';
  } else if (marks >= 40) {
    return 'Grade E';
  } else {
    return 'Grade F';}}

const marks = readlineSync.questionInt('Enter the marks: ');

const grade = calculateGrade(marks);
console.log(`Grade: ${grade}`);