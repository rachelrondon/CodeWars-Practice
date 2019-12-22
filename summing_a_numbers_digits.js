let sumDigits = (number) => {
  let sum = 0;
  let absoluteNum = Math.abs(number);
  let digits = absoluteNum.toString().split('');
  let realDigits = digits.map(Number);

  realDigits.forEach((num) => {
    sum += num;
  })
  return sum;
}

sumDigits(99)
