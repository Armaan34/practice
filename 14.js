// accept input of 2 numbers from command line, find them sum using the api
// accept a third input, and add to the same using the api
// repeat for the fourth and final sum

import axios from "axios";
import readLineSync from "readline-sync";

function hitAPI(num1, num2) {
  return axios.get(`https://5938-49-204-22-28.ngrok-free.app/${num1}/${num2}`);
}
console.time();
const num1 = readLineSync.questionInt("enter number 1 : ");
const num2 = readLineSync.questionInt("enter number 2 : ");

hitAPI(num1, num2)
    .then(res =>{
        const sum1 = res.data.success;
        console.log(sum1);
        const num3 = readLineSync.questionInt("enter number 3 : ");
        return hitAPI(sum1 , num3)
    })
    .then(res=>{
        const sum2 = res.data.success;
        console.log(sum2);
        const num4 = readLineSync.questionInt("enter number 4 : ");
        return hitAPI(sum2, num4)
    })
    .then(res =>{
        const sum3 = res.data.success;
        console.log("The final sum is: ", sum3);
        console.timeEnd();
    })
    .catch(err => console.log(err))