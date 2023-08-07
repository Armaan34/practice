class Bootcamper{
    constructor(fName , lName , age){
        this.fName = fName;
        this.lName = lName;
        this.age = age
    }
    bio(){
        console.log(this.fName , this.lName,  this.age)
    }
}

class Instructor extends Bootcamper{
    constructor(fName , lName , age , exp){
        super(fName , lName , age)
        this.exp = exp
    }
    startClass(){
        console.log("Class is started");
    }
}

const obj = new Instructor("Ateeq","Udd",30,"3")
console.log(obj);
obj.bio()
obj.startClass()

console.log(Object.getPrototypeOf(obj));
let arr = [1,2,3]
console.log(Object.getPrototypeOf(arr));