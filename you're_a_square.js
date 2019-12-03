/* Given an integral number, determine if it's a square number:

In mathematics, a square number or a perfect square is an integer that is the square of an integer;
in other words, it is the product of some integer and itself */

let checkSquareNumber = (number) => {
  /* Math.sqrt returns the square root of a number */

    if (Math.sqrt(number) % 1 === 0) {
      /* a square number divided by 1 will return 0 */
      return true;
    } else {
      return false;
    }

}

checkSquareNumber()
