/* given a non-negative integer, 3 for example -
return a string with a murmur "1 sheep ... 2 sheep ... 3 sheep ..."*/

let countSheep = (number) => {
  let murmur = '';

  for (let i = 0; i < number.length; i++) {
      murmur += i.toString() + ' sheep...';
  }

  return murmur;
}

countSheep(3);
