/* Duplicate Encoder
  - The goal of this exercise is to convert a string to a new string where each character in the new string is "("
  if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
  Ignore capitalization when determining if a character is a duplicate.
 */


 let duplicateString = (theString) => {

  let newString = "";

  let lowerCasedString = theString.toLowerCase();

   for (let i = 0; i < lowerCasedString.length; i++) {
     /* if the character appears only once */
     if (lowerCasedString.indexOf(lowerCasedString[i]) !== lowerCasedString.lastIndexOf(lowerCasedString[i])) {
       newString += ")";
    /* if the character appears more than once */
     } else {
       newString += "("
     }
   }
   return newString;
 }

 duplicateString("din");
 duplicateString("recede");
 duplicateString("Success");
 duplicateString("(( @")
