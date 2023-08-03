const person1 = {
    fullName : function(){
        return this.firstName + " " + this.lastName
    }
}

const obj = {
    firstName :  'Bill',
    lastName : "Gates"
}

console.log(person1.fullName.call(obj));