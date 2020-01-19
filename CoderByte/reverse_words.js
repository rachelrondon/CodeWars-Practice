/* complete the function that accepts a string parameter, and reverses each word in a string.
All spaces in the string should be retained */

let reverseWords = (string) => {
  let reverseString = string.split("").reverse().join("");
  console.log(reverseString);
}

reverseWords('This is an example');

let reverseWords = (string) => {
  let reverseString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
}

reverseWords('This is an example');
