var readLineSync = require("readline-sync");

var emails = readLineSync.questionInt("Enter the number of mails you have : ");

if(emails > 0) {
    console.log("your inbox has mails");
}
else if (emails < 0) {
    console.log("your input is wrong, emails cannot be negative")
} else{
    console.log("your emails are empty");
}