/* - write a function that takes a number of petals for each flower and returns true if
one has an even number of petals and the other has an odd number */


let flowerPetals = (first, second) => {
  if (first % 2 === 0 && second % 2 != 0) {
    return true;
  } else if (first % 2 != 0 && second % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

flowerPetals(5, 2);
