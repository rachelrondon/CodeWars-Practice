/* given a two-dimensional array of integers, return the flattened version of the array with all of the integers in the sorted (ascending) order */

let sortArray = (array) => {
  let finalArray = [];
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  for (let i = 0; i < newArray.length; i++) {
    finalArray = finalArray.concat(newArray[i]);
  }

  return finalArray.sort(function (a, b) {
    return a - b;
  })
}

sortArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]);
