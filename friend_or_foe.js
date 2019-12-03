/* Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in in, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not.
Ex: Input = ['Ryan', 'Kieran', 'Jason', 'Yous'], Output = ["Ryan", "Yous"];
*/

let checkFriends = (string) => {
  let friend = [];
  let shouldBe = []

  for (let i = 0; i < string.length; i++) {
    if (string[i].length === 4) {
      friend.push(string[i]);
    } else {
      shouldBe.push(string[i]);
    }
  }

  return `friends: ${friend}, shouldBe: ${shouldBe}`
}

checkFriends(["Love", "Your", "Face", "1"]);
