let thirt = (n) => {
  const nums = [1,10,9,12,3,4];

  var sum = ('' + n).split("").reverse().reduce((sum, v, i) => sum + v * nums[i%nums.length], 0)
  return sum === n ? n : thirt(sum);
}

thirt(8529);
