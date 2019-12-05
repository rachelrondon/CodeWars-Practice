/* create a function that returns the sum of a sequence of integers */

const sequenceSum = (begin, end, step) => {
  let total = 0;

  if (begin > end) {
    return 0
  }

  for (let i = begin; i <= end; i+= step) {
    total += i;
  }

  return total;
}

sequenceSum(2,2,2); // => 2
sequenceSum(1, 5, 1) // => 15
sequenceSum(1, 5, 3) // => 5
