var arr = [2,3,5,6,7,8,9,11, 13, 14, 16, 18, 19, 21,22,23,24]
arr.forEach(ele => {
if (ele % 2 == 0) {
    console.log("even number is " + ele);
  } else {
    console.log("odd number is " + ele);
  }
})