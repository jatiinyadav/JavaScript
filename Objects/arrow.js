sayHello = (yourName) => `hey ${yourName}, how you doin?`;

console.log(sayHello("Lucifer"));

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
    isDone: false,
  },
  {
    title: "Hobby4",
    isDone: true,
  },
];

const thingsDone = newTodos.filter((todo) => {
  if (todo.isDone === false) {
    console.log(todo.title);
  }
});
