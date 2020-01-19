/* Find max(abs(length(x) − length(y)))
max() is a function that is used to return the largest value from the numbers provided as parameters.
abs() is a function used to return the absolute value of a number
 */

let maxLength = (a1, a2) => {

   if (a1.length === 0 || a2.length === 0) return - 1

   let l1 = a1.map(str => str.length);
   let l1 = a2.map(str => str.length);

   return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))

}

maxLength(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]);
