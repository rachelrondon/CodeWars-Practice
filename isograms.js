/* write a function that determines if a string that contains only letters has no repeating letters, consecutive, or non-consecutive */

let isIsogram = (string) => {
  var i, j;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

isIsogram("Dermatoglyphics");


/* using a hash */
let isIsogram = (string) => {
let hash = {};
/* convert all of the letters within the string to lower case */
let string = string.toLowerCase();

for (let i = 0; i < string.length; i++) {
  if (hash[string[i]]) {
    return false;
  }
  hash[string[i]] = true;
}
  return true;
}

isIsogram("Dermatoglyphics");
