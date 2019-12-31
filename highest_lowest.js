/* highest and lowest */

let highAndLowest = (numbers) => {
  let numbersArray = numbers.split(" ");
  var sortedNumArr = numbersArray.sort(function(a, b) {
    return a - b;
  });
  return sortedNumArr[sortedNumArr.length - 1] + " " + sortedNumArr[0];
}

highAndLowest("1 2 3 4 5");
