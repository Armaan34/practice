var { data } = require("./data.js")

var user = data.find(ele => ele.id == 6)

user.name = "Theo schwatz"
// console.log(user);
console.log(data);