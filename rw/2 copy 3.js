// chocolates 
// cost of 1  = 1.5 rs
// my money = 10 rs

function getChocolates(money){
    console.log(Math.floor(money/1.5));
    return (money%1.5)
}

// var balance = getChocolates(10)

// console.log(balance , " this is the remaining amount");

function returnValue(){
    return 5
}
// console.log(returnValue());

function justReturn(){
    console.log("Hi this line is printed");
    return
    console.log("this is not printed");
}

justReturn()