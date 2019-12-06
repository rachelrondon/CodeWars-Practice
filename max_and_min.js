/* find min and max values */

let findMin = (numbers) => {

  let min = numbers[0];

  numbers.forEach((num) => {
    if (num < min) {
      min = num;
    }
  })

  return min;

}

findMin([42,54,65, 87, 0]);


let findMax = (numbers) => {

  let max = numbers[0];

  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
  })
  
  return max;

}

findMax([-52, 56, 30, 29, -54, 0, -110]);
