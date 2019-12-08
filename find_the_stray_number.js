/* you are given an odd-length array of integers -
in which all of them are the same except for one single number -
complete the method which accepts such an array and returns the single different number */


let strayNumber = (numbers) => {
    let strayNumber = numbers[0];

    if (strayNumber !== numbers[1] && strayNumber !== numbers[2]) {
      return strayNumber;
    }

    for (let i = 1; i < numbers.length; i++) {
      if (strayNumber !== numbers[i]) {
        return numbers[i]
      }
    }

}

strayNumber([1, 1, 2]);
