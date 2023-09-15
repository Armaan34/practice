import chalk from "chalk";
import { questionNewPassword , question, questionEMail} from "readline-sync";
import bcrypt from "bcrypt"

import fs from "fs/promises"

/*

usernmae 
email 
phone 
address
password
confirm password
 
*/

async function registerUser() {
  try {
    console.clear();
    console.log(`
    ====================================\n
    \tUser Register\n 
    ====================================`);

    let username = question("Enter new Username : ");
    while (!username) {
      username = question("Please enter your Username : ");
    }
    let email = questionEMail("Enter your email : ");
    
    let phone = question("Enter phone number : ");
    while (!phone) {
      phone = question("Please enter phone number : ");
    }
    let address = question("Enter your address : ");
    while (!address) {
      address = question("Please enter your address : ");
    }
    // let password = readLineSync.question("enter password : ", {hideEchoBack : true});
    // let password = questionNewPassword()
    let password = question("Enter your password : ", {hideEchoBack : true})

    let confirmPassword = question("Enter your password again : ", {hideEchoBack : true})

    while(password !== confirmPassword){
        console.log("Passwords don't match")
        password = question("Re-enter your password : ", {hideEchoBack : true})
        confirmPassword = question("Enter your password again : ", {hideEchoBack : true})
    }

    password = await bcrypt.hash(password, 12)

    // console.log(password);
    let userData = {
      username,
      email, // has to be unique
      password,
      phone,
      address,
      todo: []
    }


    let data = await fs.readFile("data.json");
    data = JSON.parse(data)

    let found = data.find(ele => ele.email == email)
    if(found){
      throw chalk.redBright("User already exists")
    }
    data.push(userData)
    await fs.writeFile("data.json", JSON.stringify(data))
    console.log("User Registered Successfully");
  } catch (error) {
    console.log(error);
  }
}
export default registerUser;
