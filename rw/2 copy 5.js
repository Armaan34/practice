// Command Line Interface ( CLI )

import { question, questionInt } from "readline-sync"


console.log("--------------------------")
console.log("Simple Calculator for Maths")
console.log("--------------------------")
console.log("\t Press + for Addition \n \t Press * for multiplication \n \t Press x for square")

var symbol = question("Enter what action you want to perform : ");


var num1 = questionInt("Enter number 1 : ")
var num2 = questionInt("Enter number 2 : ")


switch(symbol){
    case "+":
        console.log(num1 + num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "x":
        console.log(num1**2);
        break;
    default:
        console.log("Invalid input");
        break;
}