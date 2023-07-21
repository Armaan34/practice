//Calculator

var readlineSync = require("readline-sync")

console.log("Simple Calculator")

console.log("\t Press + for Addition \n \t Press * for Multiplication \n \t press - for Subtraction \n \t press / to Divide \n \t press x to square")

var symbol = readlineSync.question("Enter your action to perform : ");

if (symbol == "x") {
    var num1 = readlineSync.questionInt("Enter a number: ");
} else {
    var num1 = readlineSync.questionInt("Enter Number 1: ");
    var num2 = readlineSync.questionInt("Enter Number 2: ");
}
switch (symbol) {
    case "+":
        console.log(num1 + num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "x":
        console.log(num1 ** 2);
        break;
    default:
        console.log("Invalid input, Please try again");
        break;
}