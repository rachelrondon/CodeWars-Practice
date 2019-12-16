/* how many years will he have to invest his money until it amounts to D */

let moneySum = (principal, interest, tax, desired) => {
  let years = 0;

  while (principal < desired) {
    principal = principal + (principal * interest - principal * interest * tax)

    years += 1;
  }
  return (years);
}

moneySum(1000, 0.05, 0.18, 1100);
