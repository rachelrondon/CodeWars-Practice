/* given a string of words - find the length of the shortest string */

let shortestWord = (string) => {
  let words = string.split(" ");
  let shortest = words[0];

  for (var i = 0; i < words.length; i++) {
    if (words[i].length < shortest.length) {
        shortest = words[i];
    }
  }
  return shortest.length;
}

shortestWord("bitcoin take over the world maybe who knows perhaps");
