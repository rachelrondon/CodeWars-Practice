/* When provided with a number between 0 - 9, return it in words */

let switchItUp = (number) => {
  if (number === 9) {
    return 'Nine';
  } else if (number === 8) {
    return 'Eight';
  } else if (number === 7) {
    return 'Seven';
  } else if (number === 6) {
    return 'Six';
  } else if (number === 5) {
    return 'Five';
  } else if (number === 4) {
    return 'Four';
  } else if (number === 3) {
    return 'Three';
  } else if (number === 2) {
    return 'Two';
  } else if (number === 1) {
    return 'One';
  } else if (number === 0) {
    return 'Zero'
  }

}

switchItUp(9);


/* alternative solution */

let switchItUp = (number) => {
  let theWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

  return theWord[number];
}

switchItUp(7);
