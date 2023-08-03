var a = 2;

console.log(a); // global scope

{
    console.log(a); // block scope
}

function abc(){
    console.log(a); // functional scope
}
abc()

// scope - availability of a particular variable


// var is global
// JS is a loosely typed language