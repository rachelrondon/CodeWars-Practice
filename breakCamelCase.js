/* write a function that will break up camel casing, using a space between words */

let camelCase = (string) => {
  let newString = string.split(/(?=[A-Z])/).join(" ");
  console.log(newString);
}

camelCase('camelCasing');
