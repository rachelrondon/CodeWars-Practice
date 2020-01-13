/* return the longest word within the string */

let longestWord = (string) => {
  let stringArray = string.split(" ");

  let orderedArray = stringArray.sort((a, b) => {
    return a.length < b.length;
  });

  return orderedArray[0];
}


longestWord('My name is Rachel');
