/*
Write a function, that takes object as a parameter, returns the number of properties in an object
*/

var person = { name: "John", age: 30, address: { street: "Main St", city: "New York", state: "NY" } };

function countProperties(obj){
    var keys = Object.keys(obj)
    return keys.length
}

console.log(countProperties(person));
