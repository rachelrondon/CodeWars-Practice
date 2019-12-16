let countDuplicates = (text) => {
  let duplicateCount = 0;

    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < text.length; j++) {
        if (text[i] === text[j]) {
          duplicateCount += 1;
        }
      }
    }

    return duplicateCount; 
}

countDuplicates("aabbcde");
