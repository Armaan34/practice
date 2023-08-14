import axios from "axios";
import fs from "fs";

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    // console.log(res.data);
    // const pending = [];
    // const completed = [];

    // res.data.forEach((ele) => {
    //   if (ele.completed) completed.push(ele);
    //   else pending.push(ele);
    // });
    // console.log(pending.length);
    // console.log(completed.length);
    
    const tasks = res.data.reduce(
      (acc, curr) => {
        if (curr.completed) acc.completed.push(curr);
        else acc.pending.push(curr);
        return acc;
      },
      {
        completed: [],
        pending: [],
      }
    );

    fs.writeFile("pending.json", JSON.stringify(tasks.pending), (err) => {
      if (err) throw err;
      console.log("successfully created pending file");
    });

    fs.writeFile("completed.json", JSON.stringify(tasks.completed), (err) => {
      if (err) throw err;
      console.log("successfully created completed file");
    });
  })
  .catch((err) => console.log(err));




// fetch the data, segregate it into completed and pending based on boolean of completed field,
// save the diff arrays in json files, completed.json and pending.json using fs module
