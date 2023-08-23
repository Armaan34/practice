const obj1 = {
    a : 2,
    b: 3,
}

const obj2 = obj1
obj2.c = 4
console.log(obj1);
console.log(obj1 == obj2);