/* Complete the solution so that it returns if the first argument(string) passed in ends with the 2nd argument (also a string) */


let stringEndsWith = (one, two) => {
  if (one.endsWith(two)) {
    return true;
  } else {
    return false;
  }

}

stringEndsWith('abc', 'bc'); // => true
stringEndsWith('abc', 'd'); // => false 
