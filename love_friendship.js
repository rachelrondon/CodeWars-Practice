/* If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108 */

/* reference: https://github.com/lndgalante/codewars-katas/blob/master/7-kyu/Love%20vs%20friendship/index.js */

let wordsToMarks = (string) => {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return string
  .split('')
  .map(char => alphabet.findIndex(letter => letter === char) + 1)
  .reduce((total, value) => total + value, 0)
}

wordsToMarks("family");
