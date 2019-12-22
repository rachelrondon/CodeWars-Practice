/* create a function that checks if the same amount of 'x's and 'o's. */

let check = (string) => {

  let newString = string.toLowerCase();

  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === 'x') {
      xCount += 1;
    } else if (newString[i] === 'o') {
      oCount += 1;
    }
  }

  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }

}

check('xo');
