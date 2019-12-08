/* given an integer as input, can you round it to the next (meaning, "higher")5? */

let roundToNext = (number) => {
  return (number % 5) >= 2
}

roundToNext()
