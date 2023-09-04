/*

* * * * *
* * * *
* * * 
* * 
*

*/

// var str = "* "
// for(var i=5;i>0;i--){
//     console.log(str.repeat(i));
// }


// var str = "*****";
// for(var i = 5; i > 0; i--){
//     console.log(str);
//     str = str.substring(0 , i - 1)
// }

for(var i = 5 ; i >=1; i--){
    let row="";
    for(var j = 1 ;j<=i ; j++){
        row +="*"
    }
    console.log(row);
}