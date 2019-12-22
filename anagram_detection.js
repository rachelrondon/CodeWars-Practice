let anagram = (test, original) => {
  let testArray = test.toLowerCase().split('');
   let originalArray = original.toLowerCase().split('');
   let sortedTest = testArray.sort();
   console.log('this is sortedTest');
   console.log(sortedTest);

   let originalTest = originalArray.sort();
   console.log('this is the originalTest');
   console.log(originalTest);

   if (sortedTest === originalTest) {
     return true;
   } else {
     return false;
   }
}

anagram("foefet", "toffee");
