let isPalindrome = (string) => {

  let reverseString = string.split("").reverse().join("");

  if (string === reverseString) {
    return true;
  } else {
    return false;
  }

}

isPalindrome('madam');
