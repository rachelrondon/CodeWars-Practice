/* create a function that takes a list of non-negative integers and strings and returns a new list with the string filtered out */

let listFiltering = (list) => {
  let newArray = [];

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      newArray.push(list[i])
    }
  }

  return newArray;
}

listFiltering([1,2,'a','b']);
