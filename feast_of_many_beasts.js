/* the dish must start and end with the same letters as the animal's name */

let theFeast = (animal, dish) => {
  let animalLength = animal.length;
  let dishLength = dish.length;

if (animal.charAt(0) === dish.charAt(0) && animal.charAt(animalLength - 1) === dish.charAt(dishLength -1)) {
    return true;
  } else {
    return false;
  }
}

theFeast("great blue heron", "garlic naan"); //=> true
theFeast("chickadee", "chocolate cake"); //=> true
theFeast("brown bear", "bear claw"); //=> false 
