var arr = [-2, -4, 3, -6, 7, 8, 12, -2, -8];
//Imperative Approach

function filterArr(arr){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i]<0){
            arr.splice(i,1)
            i--
        }
    }
 console.log(arr);   
}
filterArr2(arr)

//Declarative Approach

function filterArr2(arr){
    arr = arr.filter(ele => ele >0)
    console.log(arr);
}