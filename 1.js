function abc(){
    console.log("abc");
}
console.log("start");
abc();

setTimeout(()=>{
    console.log("Welcome to first NodeJS");
}, 2000)

console.log(123);
console.log("end");

setTimeout(()=>{
    console.log("Welcome to second NodeJS");
}, 1000)


// Sync / blocking
// Async / non-blocking