var obj ={
    saad : {
        age : 30,
        email: "saad@email.com",
    },
    ateeq : {
        age : 32,
        email : "ateeq@gmail.com", 
    },
    kushal: {
        age: 28,
        email: "kushal@gmail.com",
    },
    "x-auth-token": "absafgsegdsg",
};

//x-auth-token
console.log(obj["x=auth-token"]);
console.log(obj["kushal"]["age"]);

obj.ateeq.email = "ateeq@code.in"

delete obj["x-auth-token"]

console.log(obj);

//How to extract all keys from the object
//How to extract all values from an object

//For In Loop
for(key in obj){
    console.log(key);
}

//Get Keys
for(key in obj){
    console.log(obj[key]);
}

//Different way to get keys
var keys = Object.keys(obj)
console.log(keys);

var values = Object.values(obj);
console.log(values);

//Spread operator
var arr = [1,2,3,4,5]

var obj2 = {...arr}
console.log(obj2);