/* write a function that returns if an array of integers is sorted in ascending, descending or none */

let sorted = (array) => {
  let sortedArray = array.sort();
  let descendingArray = sortedArray.reverse();

  if (array === sortedArray) {
    return 'yes, ascending';
  } else if (array === descendingArray) {
    return 'yes, descending';
  } else {
    return 'no'
  }
}

sorted([1, 2]);
