const readlineSync = require('readline-sync');

var x = readlineSync.question('Enter a number: ');

var squareRoot = Math.sqrt(x);

if (x === squareRoot * squareRoot) {
  console.log('Your number is a perfect square.');
} else {
  console.log('Your number is not a perfect square.');
}
