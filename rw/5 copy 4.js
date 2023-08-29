const person = {
    firstName : "john",
    lastName : "doe",
    fullName : function (){
        return this.firstName + " " + this.lastName
    }
}

const obj = {
    firstName :  'Bill',
    lastName : "Gates"
}

console.log(person.fullName());
let fullName =  person.fullName.bind(obj)
obj.firstName = "lol"
console.log(fullName());