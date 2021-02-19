var name = prompt("Enter your name: ");

var message = "Hello ";

alert(message + name + " . Welcome, to my portfolio!!");
//
//
console.log("---------");
//
//
var name = "Jatin Yadav";
name.length;
console.log(name.length);
//
//
console.log("---------");
//
//
var tweet = prompt("Enter tweet");
alert(
  "Entered chararcters:  " +
    tweet.length +
    " Remaining chararcters: " +
    (140 - tweet.length)
);
//
//
console.log("---------");
//
//
var name = prompt("Enter name");
nameFirstChar = name.slice(0, 1);
nameRestChar = name.slice(1, name.length);
alert("Hello, " + nameFirstChar.toUpperCase() + nameRestChar.toLowerCase());
//
//
console.log("---------");
//
//
var dogage = prompt("Enter your dog age");
var humanage = (dogage - 2) * 4 + 21;
alert("You dog's age as human will be: " + humanage);
//
//
console.log("---------");
//
//
