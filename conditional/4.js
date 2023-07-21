var readLineSync = require("readline-sync");

var a = readLineSync.questionInt("Enter first value : ");
var b = readLineSync.questionInt("Enter second value : ");
var c = readLineSync.questionInt("Enter third value : ");

if (a > b && a > c) {
    console.log(a + " is the greatest.");
  } else if (b > c) {
    console.log(b + " is the greatest.");
  } else if (c > b) {
    console.log(c + " is the greatest");
  } else {
    console.log("all are equal.");
  }