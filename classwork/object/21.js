var utils = require("./20.js");

// console.log(utils);
//Declarative Approach
function filterArr(arr) {
  var primes = arr.filter((ele) => utils.isPrime(ele));
  console.log(`The total primes: ${primes.length}`);

  var arms = arr.filter((ele) => utils.armStrongCheck(ele));
  console.log(`The total armstrong count: ${arms.length}`);

  arr = arr.filter((ele) => !utils.isPrime(ele) && !utils.armStrongCheck(ele));
  console.log(arr);
}

filterArr([10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11]);