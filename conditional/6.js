var readLineSync = require("readline-sync");

var a = readLineSync.questionInt("Enter first value : ");
var b = readLineSync.questionInt("Enter second value : ");
var c = readLineSync.questionInt("Enter third value : ");

(a > b && a > c) ? console.log(a + " is the greatest") : (b > c) ? console.log(b + " is the greatest") : console.log(c + " is the greatest");
// cleaner comparison