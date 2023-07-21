//armstrong number

function armStrongCheck(num){
    var number = num.toString().split("")

    var digitsCount = number.length;
    var sum = 0;
    for(var i =0 ; i < digitsCount ; i++){
        sum += (number[i] ** digitsCount)
    }
    (num == sum) ? console.log("it is an armstrong number") : console.log("it is not an armstrong number");
}

armStrongCheck(370)