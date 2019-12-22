/* write a findSum function, upto and including n will return the sum of all multiples of 3 and 5 */

let findSum = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {

    if (i % 3 === 0) {
      sum += i;
    } else if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

findSum(10);
