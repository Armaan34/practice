class Bootcamper{
    constructor(fName , lName , age){
        this.fName = fName;
        this.lName = lName;
        this.age = age
    }
    bio(){
        console.log(this.fName , this.lName,  this.age)
    }
    old(){
        console.log(this.age);
    }
}

const person1 = new Bootcamper("Saad","Syed", 25)
console.log(person1);
person1.bio()
person1.old()
