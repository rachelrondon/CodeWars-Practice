/* write a for loop that runs 10 times and each
time it runs add 73 to the counter variable and
adds the current value of the counter to the numebrs array */

let counter = 0;
let numbers = [];

let theFunction = () => {
  for (let i = 0; i <= 10; i++) {
    counter += 73;
    numbers.push(counter);
  }
  console.log(numbers);

  if (counter > 740) {
    console.log('too big');
  } else {
    console.log('not too big');
  }
}

theFunction();
