var arr = [1, 2, 3, 4, 5]

for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((ele, i) => {
    console.log(ele, i);
})

arr.forEach(ele =>{
    if(ele%2 == 0){
        console.log(`even : ${ele}`)
     } else {
        console.log(`odd : ${ele}`)
    }
})

function getResult(value) {
    if (value > 4) {
      return 10;
    } else {
      return 20;
    }
  }
  var result = getResult(3);
  console.log(result);

  var fruits = ["apple", "banana", "orange", "lemon"];
  var citrus = fruits.splice(2,4, "Mango", "kiwi", "litchi")


console.log(citrus);
console.log(fruits);

function reverseString(str) {
    console.log(str.split("").reverse().join(""))
}
reverseString("Hello")

module.exports = {data}
var utils = require ('./data.js')

var data = utils.data
data.sort((a,b) => {
return b.id - a.id
})
console.log(data)
