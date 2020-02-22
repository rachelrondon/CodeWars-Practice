/* given an array of digital numbers - return a new array of length number containing the last even numbers from the original array */

let evenNumbers = (array, number) => {
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  let reversedArray = newArray.reverse();

  let finalArray = reversedArray.splice(reversedArray.length - 3);
  return finalArray;
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
/* in this example, return the last three even numbers */
