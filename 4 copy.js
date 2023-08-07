console.time()
console.log('Hello ');
setTimeout((id) => {
    const user = {
        name: 'John Doe',
        age: 25
    };
    console.log(`User ID : ${id} : User name : ${user.name}, UserAge: ${user.age}`);
    console.timeEnd();
}, 5000, 11);
setTimeout(() => {
    console.log("I am First");
}, 1000);
setTimeout(() => {
    console.log("I am Second");
    console.timeLog()
}, 1500);