let totalPoints = (games) => {
  let totalCount = 0;

  let newGames = [];
  games.forEach((game) => {
  newGames.push(game.split(':'));
  })

  newGames.forEach((item) => {
   if (item[0] > item[1]) {
     totalCount += 3;
   } else if (item[0] < item[1]) {
     totalCount += 0;
   } else if (item[0] === item[1]) {
     totalCount += 1;
   }
  })

  return totalCount;

}

totalPoints(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']); //=> 30
totalPoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]); //=> 10
totalPoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) // => 0
totalPoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) // => 15
totalPoints(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) // => 12
