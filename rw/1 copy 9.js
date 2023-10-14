// let fname = prompt("enter your name")
var readLineSync = require("readline-sync"); // this is importing package for use

// console.log(readLineSync.question("enter some value, it will be logged"));

var emails = readLineSync.questionInt("Enter the number of mails you have : ");
// console.log(emails);

if (emails > 0) {
  console.log("Your inbox has mails");
} 
else if (emails < 0) {
    console.log("your input is wrong, emails cannot be negative")
} else {
  console.log("Your emails are empty");
}


