/* Create a function that turns a string into a wave.
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up */

let createWave = (string) => {
  let newArray = [];

  for (let i = 0; i < string.length; i++) {
    let theArray = string.split('');
    console.log('this is theArray');
    console.log(theArray);


    console.log('theArray[i] = theArray[i].toUpperCase()')
    console.log(theArray[i] = theArray[i].toUpperCase());

    newArray.push(theArray.join(''))
  }

  return newArray;
}

createWave('hello');
