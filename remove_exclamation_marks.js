/* write a function that removes the exclamation marks from a string */

let removeExclamationMarks = (string) => {
  let newString = string.split('!');
  let finalString = '';

  for (let i = 0; i < newString.length; i++) {
    finalString += newString[i];
  }
  return finalString;

}

removeExclamationMarks('he!llo!')
