function intToRoman(num) {
    var Obj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    var str = "";
    for (var key in Obj) {
      while (num >= Obj[key]) {
        str += key;
        num -= Obj[key];
      }
    }
    return str;
  }
  
  console.log(intToRoman(104));
  