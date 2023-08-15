import readLineSync from "readline-sync";
import axios from "axios";
import { Spinner } from "cli-spinner";
import chalk from "chalk";

function main() {
  const username = readLineSync.question(
    chalk.yellow("Enter your Username : ")
  );

  var spinner = new Spinner("Loading from server.. %s");
  spinner.setSpinnerString("|/-\\");
  spinner.start();

  setTimeout(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        // console.log(res.data);
        spinner.stop(true);
        console.log(chalk.bgCyanBright(res.data.followers, " Followers"));
      
      })
      .catch((err) => {
        console.log(err);
        spinner.stop(true);
      });
  }, 2000);
}

main();
