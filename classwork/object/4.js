let person = { name: "John", age: 30, address: { street: "Main St", city: "New York", state: "NY" } };

function countProperties(obj){
        let keys = Object.keys(obj)
        return keys.length
    }


console.log(countProperties(person));