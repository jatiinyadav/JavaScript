const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

// Write your code below
let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();

console.log(is2p2.name);

//-----------------------
//Functions as Parameters

const addTwo = (num) => num + 2;

const checkConsistentOutput = (func, val) => {
  let firstTry = func(val);
  let secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  } else {
    return "This function returned inconsistent results";
  }
};

checkConsistentOutput(addTwo, 10);

//-------------------------------
//

const teste2 = (para) => {
  return para + 2;
};

const lettry = (func, val) => {
  ftry = func(val);
  stry = func(val);

  if (ftry === stry) {
    console.log(`Good, value is of ftry: ${ftry} & stry: ${stry}`);
  } else {
    console.log("Not good");
  }
};

lettry(teste2, 10);
