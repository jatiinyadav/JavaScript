// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // numbers.splice(2, 10, 10);

// // console.log(numbers);

// // function test(okay = "John", set = "Ready") {
// //   console.log(`Hii ${okay}, be ${set}`);
// // }

// // test();

// let days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];

// console.log("Weekdays: ");
// // days.forEach(function daysList(day, index) {
// //   console.log(`${index + 1}. ${day}`);
// // });

// for (let index = days.length - 1; index >= 0; index--) {
//   console.log(days[index]);
// }

// let myTodos = [];

// myTodos.push("Task 1");
// myTodos.push("Task 2");
// myTodos.push("Task 3");
// myTodos.push("Task 4");

// for (let index = 0; index < myTodos.length; index++) {
//   console.log(myTodos[index]);
// }

function myMarks(marks, totalMarks) {
  let percentage = (marks / totalMarks) * 100;

  let myGrade = "";

  if (myGrade >= 90) {
    myGrade = "A";
  } else if (myGrade >= 80) {
    myGrade = "B";
  } else {
    myGrade = "F";
  }

  return `My Grade is ${myGrade} and my percentage is ${percentage}`;
}

console.log(myMarks(1064, 1350));
