/* write a function that filters a list of strings and returns a list with only your friends names in it */
/* a friend has 4 words in their name - otherwise, they should be */

let friendFoe = (array) => {
  let friend = [];
  let shouldBe = [];

  array.forEach((name) => {
    if (name.length === 4) {
      friend.push(name);
    } else {
      shouldBe.push(name);
    }
  })

  return friend; 
}

friendFoe(["Ryan", "Kieran", "Mark"]);
