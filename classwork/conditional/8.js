// check if divisible by 3 and 5

var readlineSync = require("readline-sync")

var a = readlineSync.questionInt("Enter your Number: ");

var b = a % 3 == 0;
var c = a % 5 == 0;

if (b && c) {
    console.log(a +" is divisible by both 3 and 5");
}
    else if (b) {
        console.log(a + " is divisible by 3");
    }
else if (c) {
    console.log(a + " is divisible by 5");
}
else {
console.log("its not divisible by both");
}