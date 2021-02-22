var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 == 0 && count % 5 == 0) {
    output.push("FIZZ BUZZ");
  } else if (count % 3 == 0) {
    output.push("FIZZ");
  } else if (count % 5 == 0) {
    output.push("BUZZ");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}
