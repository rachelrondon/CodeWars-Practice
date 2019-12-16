let reverseLetter = (str) => {

  let reverseString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }

  let newString = reverseString.replace(/[^0-9a-z]/g, '');

}

reverseLetter("krishan");
