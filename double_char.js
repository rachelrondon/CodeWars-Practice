/* Given a string, you have to return a string in which each character is repeated once */

let doubleChar = (string) => {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let repeat = string[i].repeat(2);
    newString += repeat;
  }

  return newString;

}

doubleChar('hello');
