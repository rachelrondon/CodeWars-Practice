/* given a set of numbers, return the additive inverse of each.
Each positive becomes negative, and the negatives become positive */

let invertValues = (array) => {

  let newArray = [];

  array.forEach((item) => {
    newArray.push(-item);
  })

  return newArray;
}

invertValues([1,-2,3,-4,5]);
