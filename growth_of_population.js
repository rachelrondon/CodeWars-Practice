/* In a small town the population is p0 = 1000 at the beginning of a year.
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
How many years does the town need to see its population greater or equal to p = 1200 inhabitants? */

let nbYear = (p0, percent, aug, p) => {
  let newPercent = percent / 100;
  let yearlyPercentIncrease = p0 * newPercent;
  let newYearlyAmount = p0 + yearlyPercentIncrease + 100;
  let yearsNeeded = Math.ceil(p / newYearlyAmount);

  return yearsNeeded;
}

nbYear(1500, 5, 100, 5000);

/* official solution */

function nbYear(p0, percent, aug, p, year = 0) {
  if (p0 >= p) return year;
  const newP = p0 + (p0 + (percent / 100)) + aug;
  return nbYear(newP, percent, aug, p, year + 1);
}
