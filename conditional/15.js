/* function arr(n){
    var arr = []
    for(var i = 1 ; i <= n ; i++){
        arr.push(i)
    }
return arr
}*/
//console.log(arr(100));
/*
function evenArray(n) {
    var arr = [];
    var counter =0;
    for (var i = 1; i <= n; i++) {
        counter++;
        if (i % 2 == 0) {
            arr.push(i);
        }
        }
        console.log(counter);
        return arr;
    }
    console.log evenArray(100));
*/
function evenArray2(n) {
var arr =[];
var counter = 0;
for (var i = 2; i <= n; i=i +2) {
    arr.push(i);
    counter++;
}
console.log(counter);
return arr;
    }
    console.log(evenArray2(100));