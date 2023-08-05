/*
Problem Statement : Given a string containing only parentheses, determine if the input string is valid.
             A string is considered valid if all opening parentheses are closed in the correct order.

             "(){}[]"
             "({[]})"
             "({[)]}"
*/

import Stack from "./stack.js";

function isValidParanthesis(s) {
  let arr = s.split("");
  let stack = new Stack(10);
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  //   let flag = true

  //   arr.forEach((ele) => {
  //     if (ele == "(" || ele == "{" || ele == "[") {
  //       stack.push(ele);
  //     } else {
  //         if(stack.isEmpty()){
  //             flag =  false
  //         }
  //       let peakElement = stack.peak();
  //       if (pairs[peakElement] == ele) {
  //         stack.pop();
  //       }else flag = false
  //     }
  //   });

  //   if (flag) {
  //     return true;
  //   } else return false;

  for (let ele of arr) {
    if (ele == "(" || ele == "{" || ele == "[") {
      stack.push(ele);
    } else {
      let peakElement = stack.peak();
      if (pairs[peakElement] !== ele) {
        return false
      }
      stack.pop()
    }
  }

  return stack.isEmpty()
}

console.log(isValidParanthesis("(){}[]")); // true
console.log(isValidParanthesis("({[]})")); // true
console.log(isValidParanthesis("[]))")); // false
