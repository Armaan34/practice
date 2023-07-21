var arr = [-1, 1, -5, -6, 2, 4, 7, -19, 9];

var positiveNumbers = arr.filter(isPositive)

function isPositive(n){
    if(n>0) return true;
    return false
}
//console.log(positiveNumbers);

//greater than 6 words
var words = ['spray' , 'limit' , 'elite' , 'exuberant' , 'destruction', 'present' , 'fascinating' , 'present']

words = words.filter(ele => ele.length>6)

console.log(words)

var foundWord = words.findIndex(ele => ele == "present")
console.log(foundWord)

console.log(words.splice(0,3));
console.log(words);