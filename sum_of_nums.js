/* sum of numbers from 0 to N
- generate a function that computes the series starting from 0 and ending until the given number following the sequence
*/

let theSum = (number) => {
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
}

theSum(6);
