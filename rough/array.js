// Creae an array of size 10, with random numbers

function randomArray(min,max){
    var arr = new Array(10)
    for(var i = 0; i<arr.length; i++){
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min 
    }
    console.log(arr);
}
// 45 - 10 + 1 => 36
randomArray(10,45)

//25 - 5 + 1
// 25 - 5 => 20 
//Maximum value Math.random() = 0.999999
// math.random * 21 => 20.99999
//Math.floor => 20 + 5 => 25


//Minimum value of Math.random() => 0.000001
//Math.random*21 => 0.000021
//Math.floor => 0
// 0 + 5 => 5 