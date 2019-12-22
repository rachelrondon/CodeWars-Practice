/* given two arrays, write a function, comp(a, b) that checks whether the two arrays have the "same" elements with the same multiplicities */
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

let comp = (array1, array2) => {

  let newArray = [];
  array2.forEach((num) => {
    newArray.push(Math.sqrt(num));
  })

  let a1Sorted = a1.sort();
  let newArraySorted = newArray.sort();

  for (let i = 0; i < a1Sorted.length; i++) {
    for (let j = 0; j < newArraySorted.length; j++) {
      if (a1Sorted[i] === newArraySorted[j]) {
        return true;
      } else {
        return false;
      }
    }
  }

}

comp(a1, a2);
