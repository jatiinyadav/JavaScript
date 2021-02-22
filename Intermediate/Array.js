var guestList = ["INDIA", "USA", "AUSTRALIA", "FRANCE", "GERMANY"];
console.log(guestList);

console.log(guestList.length);

console.log(guestList[2]);

console.log(guestList.includes("INDIA"));

console.log(guestList.includes("CANADA"));
//
//
console.log("-----------");
//
//
var yourName = prompt("Enter your name: ");

var guestList = ["Shubham", "Rahul", "Rohan", "Jatin", "Naveen"];

if (guestList.includes(yourName)) {
  alert("Welcome to the party " + yourName + ".");
} else {
  alert("Sorry!!");
}
