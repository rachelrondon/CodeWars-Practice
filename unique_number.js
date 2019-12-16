/* write a function that finds the unique number within an array */

let findUniqueNum = (array) => {

  let i, j;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] != array[j]) {
        return array[i];
      }
    }
  }

}

findUniqueNum([ 0, 0, 0.55, 0, 0 ]);
