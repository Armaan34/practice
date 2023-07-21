var b = [1, 2, 3];
//console.log(b);

//console.log(b[b.length-1]);
b[b.length] = 4
//console.log(b);

// PUSH, a method for adding elements to the end of an array

b.push(5)
b.push(100)
b.push("sharib")
//console.log(b);

//POP, a method for removing an element from the end of an array

b.pop()
//console.log(b);

//SHIFT removes an element from the start of an array
var value = b.shift()
//console.log(value, b);

//UNSHIFT adds an element to the first of an array
b.unshift(200,300,400)
console.group(b);