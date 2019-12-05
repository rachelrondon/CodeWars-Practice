/* return the sum of all of the positive numbers within an array */

let returnPositive = (array) => {
  let positiveArray = [];
  let positiveSum = 0;

  for (let i = 0; i < array.length; i++) {
      if (array[i] > -1) {
        positiveArray.push(array[i]);
      }
  }

  positiveArray.forEach((num) => {
    positiveSum += num;
  })
  return positiveSum;
}

returnPositive([1, -4, 7, 12]); // => 20
returnPositive([1,-2,3,4,5]); // => 13
returnPositive([]) // => 0
