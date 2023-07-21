//chocolate
// cost of 1 = 1.5rs
// my money = 10 rs

function getChocolates(money){
    console.log(Math.floor(money/1.5));
    return (money%1.5)
}

var balance = getChocolates(15)

console.log(balance, " is the remaining amount");