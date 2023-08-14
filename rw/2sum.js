// Two Sum
// [2, 7, 11, 15] , 9
// [ 1, 2,3, 4, 5 ] , 9

function twoSum(arr, target) {
  const output = [];
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        output.push([i, j]);
      }
    }
  }
  return output;
}

console.log(twoSum([1, 2, 3, 4, 5], 5));
