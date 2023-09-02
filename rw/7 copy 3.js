// //Armstrong Number

function armStrongCheck(num){
    var number = num.toString().split("")
    var digitsCount = number.length;
    var sum = 0;
    for(var i = 0 ; i< digitsCount ; i++){
        sum += (number[i] ** digitsCount)
    }
    (num == sum) ? console.log("It is an armstrong number") : console.log("It is not an armstrong number");
}

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
// // }

// armStrongCheck(370)

// var readlineSync = require("readline-sync")
// var input = readlineSync.questionInt("Enter a number to find if it is Armstrong or not : ")

// var armStrongCheck = (num) => {
//   var sum = 0;
//   var o = num;
//   while (o !== 0) {
//     var n = o % 10;
//     o = Math.floor(o / 10);
//     sum += n ** num.toString().length;
//   }
//   console.log(`Sum : ${sum}`);
  
//   if (sum === num) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // var num = 370;
// var j = 1
// var arm = []
// while(j <= input){
//     if(armStrongCheck(j)){
//         arm.push(j)
//     }
//     j++
// }
// console.log(arm);