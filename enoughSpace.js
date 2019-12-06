/* write a function that returns if all of the passengers can fit on the bus */

let enoughSpace = (cap, on, wait) => {

  let passengers = on + wait;

  if (passengers <= cap) {
    return 0;
  } else {
    return - (cap - passengers);
  }
  
}

enoughSpace(10, 5, 5)
