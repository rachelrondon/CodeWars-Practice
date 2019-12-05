/* create a function that returns the sum of two lowest positive numbers given an array of minimum 4 positive integers */

let lowestSum = (numbers) => {
  let orderedNumbers = numbers.sort(function(a, b) { return a - b; });
  let updatedNumbers = orderedNumbers.splice(0, 2);
  let sum = 0;

  updatedNumbers.forEach((number) => {
    sum += number;
  })

  return sum;
}

lowestSum([19, 5, 42, 2, 77]); // => 7
lowestSum([10, 343445353, 3453445, 3453545353453]); // => 3453455
