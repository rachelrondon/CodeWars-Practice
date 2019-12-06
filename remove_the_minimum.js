/* remove the item with the lowest rating */

let removeSmallest = (numbers) => {
  let min = Math.min.apply(null, numbers);

  let minIndex = numbers.indexOf(min);

    if (numbers.includes(min)) {
      numbers.splice(minIndex, 1)
    } else if (numbers.length === 0)
    {
      return [];
    }
    return numbers;
}

removeSmallest([1, 2, 3, 4, 5]);
