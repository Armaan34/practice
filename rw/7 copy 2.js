function Bootcamper(fName , lName , age){
    this.fName = fName;
    this.lName = lName;
    this.age = age
    this.bio = function(){
        console.log(this.fName , this.lName,  this.age)
    }
}

const person1 = new Bootcamper("Ateeq","Uddin",30) // Instantiation
const person2 = new Bootcamper("Jayesh","jayy",23)

console.log(person1);
person1.bio()
console.log(person2);
person2.bio()