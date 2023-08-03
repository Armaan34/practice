// let top = this

const bootcamp = {
    firstName : "Ateeq",
    lastName: "Uddin",
    age : 30,
    bio :  function(){
        console.log(this);
        this.firstName = "Elon";
        this.lastName = "Musk"
    }
}

// console.log(bootcamp.age);
bootcamp.bio()
console.log(bootcamp);

// this is not to be used along with fat arrow functions

// Anonymous functions are methods inside objects