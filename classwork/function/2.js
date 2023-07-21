//random array of 10 with range between 10 and 45
function randomArray(min, max) {
    var arr = new Array(10);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random()*(max - min + 1)) + min
    }
  console.log(arr);
}
randomArray(10,45)