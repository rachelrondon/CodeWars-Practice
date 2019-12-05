/* You have an array of numbers -
Your task is to sort ascending odd numbers but even numbers must be on their places */

let sortTheOdd = (numbers) => {
  let odd = numbers.filter((x) => x % 2).sort((a,b) => a - b);
  return numbers.map((x) => x % 2 ? odd.shift() : x);
}

sortTheOdd([5, 3, 2, 8, 1, 4]); // => [ 1, 3, 2, 8, 5, 4 ]
