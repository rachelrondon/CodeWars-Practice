/* Sum all of the numbers in an array except the highest and lowest element (the value, not the index); */

let findSum = (array) => {
  if (array == null) {
    return 0
  } else if (array.length < 2) {
    return 0;
  } else {
    /* sort the array from lowest to highest */
    array = array.sort(function(a, b) {
      return a - b;
    })

    let total = 0;

    /* the array is sorted from lowest to highest - now iterating over the array without the first item and the last item */
    for (let i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }

}

findSum([1, 1, 11, 2, 3]);
