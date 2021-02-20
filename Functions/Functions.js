function getMilk(money) {
  // var monney = money * 1.5;
  var numBottles = Math.floor(money * 1.5);
  console.log("Do work 1");
  console.log("Do work 2");
  console.log("Do work 3");
  console.log("Do work 4");
  console.log("Do work 5");
  console.log("Do work 6");
  console.log(
    "You have to pay " + numBottles + "$ for " + bottle + " bottle(s)"
  );
  console.log("Do work 8");
  console.log("Do work 9");
  console.log("Do work 10");
  console.log("Do work 11");
}

var bottle = prompt("Enter number of bottles: ");

getMilk(bottle);

//
//
console.log("-----------");
//
//

function getMilk(money, costPerBottle) {
  // var monney = money * 1.5;
  console.log("Do work 1");
  console.log("Do work 2");
  console.log("Do work 3");
  console.log("Do work 4");
  console.log("Do work 5");
  console.log("Do work 6");

  console.log(
    "Buy " + calcBottles(money, costPerBottle) + " number of bottles"
  );

  console.log("Do work 8");
  console.log("Do work 9");
  console.log("Do work 10");
  console.log("Do work 11");

  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  var numOfBottles = Math.floor(startingMoney / costPerBottle);

  return numOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;

  return change;
}

console.log("Your change : " + getMilk(5, 5));
