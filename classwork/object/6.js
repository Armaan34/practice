var arr = [1, 3, 4, 55, 66, 88];

//imperative paradigm
for(var i = 0 ; i<arr.length ; i++){
    console.log(arr[i]);
}

//declarative

//forEach

arr.forEach((ele , i)=> {
    console.log(ele , i);
})

//arrow function, anonymous function
