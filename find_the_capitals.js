/* write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string */


let findCapitals = (word) => {
  let array = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      array.push(word.indexOf(word[i]));
    }
  }
  return array;
}

findCapitals('CodEWaRs');
