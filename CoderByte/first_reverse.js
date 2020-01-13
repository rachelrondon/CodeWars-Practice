/* reverse a string */

let firstReverse = (string) => {

  let newString = '';

  for (let i = string.length - 1; i > 0; i--) {
    newString += string[i];
  }

  return newString;
}

firstReverse('Rachel');



let firstReverse = (string) => {

  let newString = string.split('').reverse().join('');

  return newString;
}

firstReverse('Rachel');
