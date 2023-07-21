function isPrime(num) {
    var flag = true;
    if (num === 1) return false;
    for (var i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  
  // function primeSeries(N){
  //     var primes = []
  //     for(var i = 2 ; i <= N; i++){
  //         if(isPrime(i)) primes.push(i)
  //     }
  //     console.log(primes);
  // }
  // primeSeries(100)
  
  
  var i = 2
  var primes = []
  while(primes.length < 100){
      if(isPrime(i)){
          primes.push(i) 
      } 
      i++
  }
  
  console.log(primes);