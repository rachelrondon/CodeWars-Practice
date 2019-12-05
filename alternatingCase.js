/* write a function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase */

let alternatingCase = (word) => {
  let newWord = '';


  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i] .toUpperCase()) {
        newWord += word[i] .toLowerCase();
    } else if (word[i]  === word[i].toLowerCase()) {
      newWord += word[i].toUpperCase();
    }
  }

  return newWord;

}

alternatingCase('hello world'); // => 'HELLO WORLD';
alternatingCase('HELLO WORLD'); // => 'hello world';
alternatingCase('hello WORLD'); // => 'HELLO world';
alternatingCase('HeLLo WoRLD'); // => 'hEllO wOrld';
