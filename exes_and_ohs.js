/* Check if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char */


let checkTheString = (string) => {

let oCount = 0;
let xCount = 0;

let newString = string.toLowerCase();
console.log('this is the newString');
console.log(newString);

for (let i = 0; i < newString.length; i++) {
  if (newString[i] === 'o') {
    oCount += 1;
  } else if (newString[i] === 'x') {
    xCount += 1;
  }
}

  if (oCount === xCount) {
    return true;
  } else {
    return false;
  }
}

// => XO("ooxx") => true
// => XO("xooxx") => false
// => XO("ooxXm") => true
// => XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// => XO("zzoo") => false
