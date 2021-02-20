function bmiCalculator(weight, height) {
  var yourBMI = weight / Math.pow(height, 2);
  return Math.round(yourBMI);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
