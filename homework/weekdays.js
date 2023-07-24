// days in a week
var readlineSync = require("readline-sync");

var a = readlineSync.questionInt("Enter a value from 0 to 6:");

switch (a) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input, try values between 0 and 6");
        break;
}
