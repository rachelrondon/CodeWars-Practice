/* sort a given string - each word in a string will contain a single number -
this number is the position the word should have in the result */

let order = (words) => {
  if (words === "") {
    return "";
  }

  var array = [];
  /* this converts the string into an array of strings */
  words = words.split(" ");
  var j = 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(j) > -1) {
      array.push(words[i]);
      j++;
      i=-1;
    }
  }
  return array.join(" ");
}

order("in3to I1 5Hopper go2t Grace4");
