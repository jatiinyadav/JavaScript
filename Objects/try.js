covertRs = (money) => {
  if (typeof money == "number") {
    return 64 * money;
  } else {
    throw "You have entered wrong format number";
  }
};
try {
  console.log(covertRs("Five"));
} catch (error) {
  console.log(error);
}

console.log("I will not run if the program crashes");
