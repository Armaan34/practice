/*
Write a function, considering an object with only numerical values, return the sum of the values
*/

var obj = { a: 1, b: 3, c: 10, d: 4, e: 8 };

function sumValues(obj) {
  var sum = 0;
  for (key in obj) {
    sum += obj[key];
    // console.log(obj[key]);
  }
  console.log(sum);
}

sumValues(obj);
