/* write function bmi that calculates body mass index (bmi = weight / height ^ 2); */

let bmi = (weight, height) => {

  let bmi = weight / height ** 2;
    console.log(bmi);

    if (bmi <= 18.5) {
      return "Underweight";
    } else if (bmi > 18.5 && bmi <= 25) {
      return "Normal";
    } else if (bmi > 25 && bmi <= 30) {
      return "Overweight";
    } else if (bmi > 30) {
      return "Obese";
    }
}

bmi(80, 1.80);
