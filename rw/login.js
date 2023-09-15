import chalk from "chalk";
import { question, questionEMail } from "readline-sync";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import loggedIn from "../Todo/index.js";

async function loginUser() {
  try {
    console.clear();
    console.log(`
    ====================================\n
    \tUser Login\n 
    ====================================`);

    let email = questionEMail("Enter your email : ");

    let password = question("Enter your password : ", { hideEchoBack: true });

    while (!password) {
      password = question("Enter your password : ", { hideEchoBack: true });
    }

    let data = await fs.readFile("data.json")
    data = JSON.parse(data);

    let emailFound = data.find(ele => ele.email == email)

    if(!emailFound){
        throw chalk.redBright("User not found / wrong email")
    }

    let passwordFound = await bcrypt.compare(password , emailFound.password);
    if(!passwordFound) throw chalk.redBright("Password doesn't match")

    await loggedIn(email)

} catch (error) {
    console.log(error);
  }
}
export default loginUser;
