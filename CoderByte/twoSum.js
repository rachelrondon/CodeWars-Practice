/* write a function that takes an array of numbers -
and a target number. It should find two different items in the array that -
when added together - give the target value */

let twoSum = (array, targetNum) => {

  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === targetNum) {
        return [i, j];
      }
    }
  }

}

twoSum([1, 2, 3], 4);
