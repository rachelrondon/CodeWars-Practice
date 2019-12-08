/* write a function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained */

let reverseWords = (string) => {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString; 
}

reverseWords("double  spaces");
