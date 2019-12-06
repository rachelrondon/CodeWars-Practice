/* you are given a string of space separated numbers, and have to return the highest and lowest number */

let highLow = (string) => {
  /* convert the string into an array with string.split(" "); */
  let array = string.split(" ");
  let lowest = array[0];
  let highest = array[0];

  array.forEach((num) => {
    if (num < lowest) {
      lowest = num;
    }
  })
  return lowest;

  array.forEach((num) => {
    if (num > highest) {
      highest = num;
    }
  })

  return `${lowest}, ${highest}`
}

highLow("1 2 3 4 5");
