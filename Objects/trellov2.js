// const myTodos = ["Hobby1", "Hobby2", "Hobby3"];

// console.log(myTodos[0]);

// console.log(myTodos.includes("Hobby1"));

// console.log(myTodos.indexOf("Hobby2"));

// console.log(myTodos.reverse());

const newTodos = [
  {
    title: "Hobby1",
    isDone: true,
  },
  {
    title: "Hobby2",
    isDone: false,
  },
  {
    title: "Hobby3",
    isDone: true,
  },
];

// const result = newTodos.findIndex(function (todo) {
//   console.log(todo);

//   console.log(todo.title);

//   return todo.title === "Hobby2";
// });

// console.log(result);

function todoResult(anyTodo, title) {
  const index = anyTodo.findIndex(function (todo) {
    return todo.title.toLowerCase() === title.toLowerCase();
  });

  return anyTodo[index];
}

const test = todoResult(newTodos, "HOBBY2");
console.log(test);
