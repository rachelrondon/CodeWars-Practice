let vowelCount = (string) => {

  let vowelList = 'aeiouAEIOU';
  let count = 0;

  for (var i = 0; i < string.length; i++) {
    if (vowelList.indexOf(string[i]) !== -1) {
      count += 1;
    }
  }
  return count;
}

vowelCount("abracadabra");
