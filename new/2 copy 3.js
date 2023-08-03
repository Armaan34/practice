//let keyword

{
    let a = 2;
    console.log(a); // block scope
}

console.log(a); // global scope

function abc(){
    console.log(a); // functional scope
}
abc()

// let is block scope
// variable created inside block using let cannot be accessed outside the block