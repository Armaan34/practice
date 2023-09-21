import chalk from "chalk";
import { question} from "readline-sync";
import fs from "fs/promises"
import randomStringGenerator from "../utils/randomString.js";
/*
{
    name,
    isCompleted,
    taskId
}
*/
async function createTodo(email) {
  try {
    console.clear();
    console.log(`
    ====================================\n
    \t Create TODO\n 
    ====================================`);

    let fileData = await fs.readFile("data.json")
    fileData = JSON.parse(fileData);

    let userFound = fileData.find(ele => ele.email == email);
    
    let todoName = question("Enter your todo name : ")
    while(!todoName){
        todoName = question("Enter your todo name : ")
    }

    let todoData = {
        name : todoName,
        isCompleted : false,
        taskId : randomStringGenerator(6)
    }

    userFound.todo.push(todoData);

    await fs.writeFile("data.json", JSON.stringify(fileData))
    console.log(chalk.green("Task Added Successfully"));
    
  } catch (error) {
    console.log(error);
  }
}
export default createTodo;
