/* Given an array of numbers, determine whether the sum of all of the numbers is odd or even */

let oddOrEven = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  if (sum % 2 !== 0) {
    return "odd";
  } else {
    return "even";
  }
}

oddOrEven([2, 5, 34, 6]);
