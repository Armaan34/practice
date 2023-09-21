import loading from "../utils/loading.js";
import chalk from "chalk";
import readLineSync from "readline-sync";
import { setTimeout } from "timers/promises";
import createTodo from "./createTodo.js";
import editTodo from "./editTodo.js";
import viewTodo from "./viewTodos.js";

async function loggedIn(email) {
 try {
    console.clear()
    console.log(chalk.green("*************************************************"));
    console.log("\t\t USER TODO  \t\t");
    console.log(chalk.green("*************************************************"));
    const options = [
      "Exit The Program",
      "Create a Todo",
      "get all Tasks",
      "Edit a Todo",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i} to ${ele}`);
    });
    const option = readLineSync.questionInt(
      "Enter your option from the above menu : "
    );
    if (option < 0 || option >= options.length) {
      let spinner = loading(
        "Invalid option. Please Try Again. Redirecting to Menu......"
      );
      await setTimeout(3000);
      spinner.stop(true);
      return loggedIn(email);
    }
  
    switch (option) {
      case 0:
        console.log("Exiting. Bye");
        return
      case 1:
        await createTodo(email)
        break;
      case 2:
        await viewTodo(email)
        break;
      case 3:
        await editTodo(email)
        break;
    }
  
    let willContinue = readLineSync.question("Do you want to continue? (Y/N)");
    if (
      willContinue == "y" ||
      willContinue == "Y" ||
      willContinue == "yes" ||
      willContinue == "Yes"
    ) {
      let spinner = loading("Redirecting to menu....");
      await setTimeout(3000);
      spinner.stop(true);
      return loggedIn(email);
    } else {
      console.log(
        chalk.bgGreenBright("Thank you for using our application, see you again!")
      );
    }
 } catch (error) {
    console.log(error);
 }
}

export default loggedIn;
