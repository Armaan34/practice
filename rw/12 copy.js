var a = 12;
{
//   let a = 121;
  console.log(a);
  {
    var a = 35;
    console.log(a);
  }
  console.log(a);
}
console.log(a);

// var manipulates the parent scope variable
// mixing var and let is bad