/* write a function that returns the sum of a sequence of integers */

let sequenceSum = (begin, end, step) => {
  let sum = 0;

  if (begin > end) {
    return 0;
  }

  for (var i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
}

sequenceSum(2, 6, 2);
