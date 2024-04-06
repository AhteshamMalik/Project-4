#! /usr/bin/env node
// Todo App Program
import inquirer from "inquirer";
let todo = [];
let condition = true;
let addTask = await inquirer.prompt({
  name: "ask",
  message: "What you want to Add?",
  type: "input",
});
todo.push(addTask.ask);
console.log(todo);
while (condition) {
  let Option = await inquirer.prompt({
    name: "options",
    message: "Select the Option: ",
    type: "list",
    choices: ["Add", "Remove", "Exit"],
  });

  if (Option.options === "Add") {
    addTask = await inquirer.prompt({
      name: "ask",
      message: "What you want to Add?",
      type: "input",
    });
    todo.push(addTask.ask);
    console.log(todo);
  } else if (Option.options === "Remove") {
    todo.pop();
    console.log(todo);
  } else {
    let getexit = await inquirer.prompt({
      name: "exit",
      message: "Don't you want to continue? press n :",
      type: "confirm",
      default: "true",
    });
    condition = getexit.exit;
  }
}
