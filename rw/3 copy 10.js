// var i = 1;
// var j = 1;
// var k = 1;

// if(i == j && j == k){
//     console.log("i is equal to k");
// }else{
//     console.log(" i is not equal to k");
// }

/*
    Three Numbers
    find the greatest of those three

    Num1 is greater than num2  or num3
    Num1 is greatest

    num2 is greater than num3
    num2 is greatest

    num3 is greatest

*/


var num1 = 10;
var num2 = 10;
var num3 = 10;

//If-Else Ladders 
if((num1 > num2) && (num1 > num3)){
    console.log("Number 1 is greatest");
}else if(num2 > num3){
    console.log("Number 2 is greatest");
}else if((num1 == num2) && (num2 == num3)){
    console.log("All the numbers are equal");
}else {
    console.log("Number 3 is greatest");
}
