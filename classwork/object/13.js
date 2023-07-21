//immediately invoked function expression
/*
(() =>{
    console.log("this is a function");
})()
*/

var numbers = [1, 3, 4, 5, 6];
//map method on numbers, returns a new array

var double = numbers.map(ele =>{
    return ele**2
})

console.log(numbers);
console.log(double);