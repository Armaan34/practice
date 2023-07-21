// random dice throw
// * 6 the value will be from 0 - 5.99
// since we values are from that we want it to be always rounding down to lowest value
// and the numbers are 0-5.99 which rounding down will be 0-5 and since dice has 1-6 we do +1 on the end

console.log(Math.floor(Math.random() * 6) +1);