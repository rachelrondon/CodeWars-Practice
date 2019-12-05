/* return the number of people that are still on the bus after the last stop */

let numberOfPeople = (busStops) => {
  let getOnTheBus = [];
  let getOffTheBus = [];
  let onTheBusSum = 0;
  let offTheBusSum = 0

  busStops.forEach((stop) => {
    getOnTheBus.push(stop[0]);
    getOffTheBus.push(stop[1]);
  })

  getOnTheBus.forEach((number) => {
    onTheBusSum += number;
  })

  getOffTheBus.forEach((number) => {
    offTheBusSum += number;
  })

  return onTheBusSum - offTheBusSum;
}

numberOfPeople([[10,0],[3,5],[5,8]]); // => 5
numberOfPeople([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) // => 17
numberOfPeople([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) // => 21 
