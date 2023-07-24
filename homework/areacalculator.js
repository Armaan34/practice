var readlineSync = require("readline-sync")

console.log("Area Calculator")

console.log("\t Press 1 for Square \n \t Press 2 for Circle \n \t Press 3 for Rectangle \n \t press 4 for Triangle")

var symbol = readlineSync.question("Enter your action to perform : ");

if 
(symbol == 1) {
    var side = readlineSync.questionInt("Enter length of the side: ");
    var area1 = side * side;
    console.log("The area of the square: " + area1);
    }
else if
(symbol == 2) {
    var radius = readlineSync.questionInt("Enter the radius: ");
    var area2 = 22/7 * (radius * radius);
    console.log("The area of the circle is: " + area2);
    }
else if
(symbol == 3) {
    var length = readlineSync.questionInt("Enter the length: ");
    var width = readlineSync.questionInt("Enter the width: ");
    var area3 = length * width;
    console.log("The area of the rectangle is: " + area3);
    }
else if
(symbol == 4) {
    var base = readlineSync.questionInt("Enter the base: ");
    var height = readlineSync.questionInt("Enter the height: ");
    var area4 = (base * height) / 2;
    console.log("The area of the triangle is: " + area4);
    }
else {
        console.log("Invalid input, Please try again");
}