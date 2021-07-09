const addtwo = (num) => num + 2;

checkConsistency = (func, val) => {
  let firstTry = func(val);
  let secondTry = func(val);

  if (firstTry === secondTry) {
    return true;
  } else return false;
};

const result = checkConsistency(addtwo, 10);
console.log(result);
