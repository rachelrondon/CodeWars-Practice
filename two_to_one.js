/* take two strings and return a new string with the distinct numbers of both */

let twoToOne = (s1, s2) => {
  let s3 = '';

  let arrayOne = s1.split('');
  let arrayTwo = s2.split('');
  let arrayThree = [];

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] != arrayTwo[i]) {
        arrayThree.push(arrayOne[i]);
      }
    }
  }
  return arrayThree;

}

twoToOne("aretheyhere", "yestheyarehere")
