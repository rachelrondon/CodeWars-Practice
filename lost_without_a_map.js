/* given an array of integers - return a new array with each value doubled */

let doubleInteger = (array) => {
  let newArray = [];

  array.forEach((item) => {
    newArray.push(item * 2);
  })

  return newArray;
}

doubleInteger([1,2,3]);
