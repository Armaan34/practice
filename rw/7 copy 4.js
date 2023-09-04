/* 

1 x 8 + 1 = 9
12 x 8 + 2 = 98
123 x 8 + 3 = 987
1234 x 8 + 4 = 9876
12345 x 8 + 5 = 98765
123456 x 8 + 6 = 987654
1234567 x 8 + 7 = 9876543
12345678 x 8 + 8 = 98765432
123456789 x 8 + 9 = 987654321

*/

var str = "";

// for (var i = 1; i < 10; i++) {
//   str += i;
//   console.log(`${str} x 8 + ${i} = ${str*8+i}`);
// }

// var str1 = "";
// var str2 = "";
// for (var i = 1; i < 10; i++) {
//   str1 += i;
//   str2 = str2 + (10 - i);
//   console.log(str2);
  // console.log(`${str1} x 8 + ${i} = ${str2}`);
// }

// var num = "12"
// console.log(num / 1);

var str1 = "";
var str2 = "";
for (var i = 1; i < 10; i++) {
    str1 += i;
    str2 = str2 + (10 - i);
    console.log(`${str1} x 8 + ${i} = ${str2}`);
}