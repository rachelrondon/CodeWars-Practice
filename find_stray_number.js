let strayNumber = (numbers) => {
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    return numbers[0];
  } else {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== numbers[0]) {
        return numbers[i];
      }
    }
  }
}

strayNumber([1, 1, 2]);
