var cars = [ "Saab", "Volvo", "bMW", "Audi"]
var arr = ["Abc0", "ABc", "BBc","AAA"];

cars.sort()
console.log(cars);

arr.sort()
console.log(arr);

var nums = [15, 3, 11, 25, 46];
nums.sort()
console.log(nums);

var nums = [15, 3, 11, 25, 46];
nums.sort((a,b)=> a-b)
nums.sort((a,b)=> b-a)
//random
nums.sort(() => {
    return Math.random() - 0.5
});
console.log(nums)