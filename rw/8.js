function abc(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 < num2) {
      resolve(`${num1} is less than ${num2}`);
    } else if (num1 > num2) {
      resolve(`${num2} is less than ${num1}`);
    } else {
      reject("both are equal");
    }
  });
}

console.log("The start");
console.log(abc(20,2));
abc(200, 50)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("calling from here");
    console.log(err);
  });

console.log("The End");

/*
Promise : 1) Pending , 2) Fulfilled , 3) Rejected
*/
