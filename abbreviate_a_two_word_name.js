/* write a function to convert a name into initials
 - The input takes two words with one space in between them
 - The output should be two capital letters with a dot separating them
*/

let abbreviateName = (name) => {
  let updatedName = name.split(" ");

  return updatedName[0][0] + "." + updatedName[1][0].toUpperCase();

}

abbreviateName("Patrick Feena");
