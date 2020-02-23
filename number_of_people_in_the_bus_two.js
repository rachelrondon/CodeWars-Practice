let number = function(busStops) {
  let newArray = [];
  let plus = [];
  let minus = [];

  for (let i = 0; i < busStops.length; i++) {
    plus.push(busStops[i][0]);
    minus.push(busStops[i][1]);
  }

  let reduction = (a,b) => {
      return a + b; 
    }
  let plusSum = plus.reduce(reduction);
  let minusSum = minus.reduce(reduction);

  let totalPeople = plusSum - minusSum;
  return totalPeople;
}

number([[10,0],[3,5],[5,8]]); 
