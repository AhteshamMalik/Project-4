#! /usr/bin/env node
// Todo App Program
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "ask",
      message: "What you want to add?",
      type: "input",
    },
    {
      name: "askMore",
      message: "Do you want to add more?",
      type: "confirm",
      default: "false",
    },
  ]);
  todo.push(addTask.ask);
  condition = addTask.askMore;
  console.log(todo);
}
