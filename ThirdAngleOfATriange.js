/* You are given two angles (in degrees) of a triange
 - write a function to return the 3rd
 - Note: only positive integers will be tested */

/* the angles of a triange always sum up to 180 degrees */

let findAngleThree = (angleOne, angleTwo) => {
  let totalSum = 180;
  let theSum = angleOne + angleTwo;

  let angleThree = totalSum - theSum;

  return angleThree;
}

findAngleThree(30, 60); // => 90;
findAngleThree(60, 60); // => 60;
findAngleThree(43, 78); // => 59;
findAngleThree(10, 20); // => 150;
