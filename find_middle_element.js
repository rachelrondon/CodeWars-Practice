/* first have to order the array from smallest to largest; then have to find the index of the number in the middle */

let findMiddle = (array) => {

  let newArray = array.sort();
  console.log('this is the newArray');
  console.log(newArray);

}

findMiddle([2, 3, 1]);
