import chalk from "chalk";
import { question, questionInt} from "readline-sync";
import fs from "fs/promises"
import randomStringGenerator from "../utils/randomString.js";
/*
{
    name,
    isCompleted,
    taskId
}
*/
async function editTodo(email) {
  try {
    console.clear();
    console.log(`
    ====================================\n
    \t Edit TODO\n 
    ====================================`);

    let fileData = await fs.readFile("data.json")
    fileData = JSON.parse(fileData);

    let userFound = fileData.find(ele => ele.email == email);
    
    let taskId = question("Enter the unique id of the task : ");
    let taskFound = userFound.todo.find(ele => ele.taskId == taskId)

    if(!taskFound){
        console.log("The task was not found");
        return
    }

    let option = questionInt("Enter 1 to change todo name , enter 2 to change status : ")
    if(option == 1){
        let newTaskName = question("Enter the new task name : ")
        taskFound.name = newTaskName
    }else if(option == 2 ){
        let confirmation = question("Enter Y/yes for completion of task : ")
        if(confirmation == "Y" || confirmation == "yes" || confirmation == "YES" || confirmation == "y"){
            taskFound.isCompleted = true
        }
    }else{
        console.log("Wrong Input");
        return
    }

    await fs.writeFile("data.json", JSON.stringify(fileData))
    
    console.log(chalk.green("Task Edited Successfully"));

  } catch (error) {
    console.log(error);
  }
}
export default editTodo;
