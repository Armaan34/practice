function isPrime(num) {
  if(factors(num)>2){
      console.log("It is a composite number");
  }else{
      console.log("It is a prime number");
  }
}

function factors(num) {
var fact = [];
var count = 0
for (var i = 0; i <= num; i++) {
  count++
  if (num % i === 0) {
    fact.push(i);
  }
}
return fact.length
}

isPrime(407)