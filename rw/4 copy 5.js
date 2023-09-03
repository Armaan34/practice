//in math, factor is just a number, that can divide another number completely with no remainder
//write a function factors, prints all factors and total number of factors

function factors(num){
var fact = []
for(var i = 0 ; i <= num ; i++){
    if(num%i === 0){
        fact.push(i)
    }
}
console.log(fact , fact.length);
}

factors(12)