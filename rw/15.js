// accept input of 2 numbers from command line, find them sum using the api
// accept a third input, and add to the same using the api
// repeat for the fourth and final sum

import axios from "axios";
import readLineSync from "readline-sync";

async function main() {
  try {
    const num1 = readLineSync.questionInt("enter number 1 : ");
    const num2 = readLineSync.questionInt("enter number 2 : ");
    const res1 = await axios.get(
      `https://5938-49-204-22-28.ngrok-free.app/${num1}/${num2}`
    );
    const sum1 = res1.data.success;
    console.log(sum1);
    const num3 = readLineSync.questionInt("enter number 3 : ");
    const res2 = await axios.get(
      `https://5938-49-204-22-28.ngrok-free.app/${sum1}/${num3}`
    );
    const sum2 = res2.data.success;
    console.log(sum2);
    const num4 = readLineSync.questionInt("enter number 4 : ");
    const res3 = await axios.get(
      `https://5938-49-204-22-28.ngrok-free.app/${sum2}/${num4}`
    );
    const sum3 = res3.data.success;
    console.log("The final sum is: ", sum3);
    // console.timeEnd();
  } catch (error) {
    console.log(error);
  }
}

main()
