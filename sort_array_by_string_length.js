/* write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest */

let sortArray = (array) => {

  return array.sort(function(a, b) {
    return a.length - b.length;
  })

}

sortArray(["Beg", "Life", "I", "To"]);
