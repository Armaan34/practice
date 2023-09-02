/*
Given an array of positive integer elements. Print out the count of Prime Numbers and
Narcissistic numbers from the array and remove those elements from the array
*/

//Imperative Approach

// prime numbers
// narcissistic numbers ( armstrong numbers )
// remove it from arr

function filterArr(arr) {
  var p = 0;
  var n = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) p++;
    if (armStrongCheck(arr[i])) n++;
    if (isPrime(arr[i]) || armStrongCheck(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log("The total primes are ",p);
  console.log("The total armstrong numbers are ",n);
  console.log(arr);
}

// filterArr([10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11]);

function armStrongCheck(num) {
  var number = num.toString().split("");
  var digitsCount = number.length;
  var sum = 0;
  for (var i = 0; i < digitsCount; i++) {
    sum += number[i] ** digitsCount;
  }
  return num == sum ? true : false;
}

function isPrime(num) {
  var flag = true;
  if (num == 1) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// module.exports = {
//     hello : "Hi",
//     name : "ateeq"
// }

module.exports = {
    isPrime,
    armStrongCheck
}