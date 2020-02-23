let vowelCount = (str) => {
  let vowels = "a,e,i,o,u";
  let vowelArray = [];
  let vowelCount = 0; 

  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
          vowelCount += 1; 
          console.log(vowelCount)
      }
  }
}

vowelCount("pear tree");
