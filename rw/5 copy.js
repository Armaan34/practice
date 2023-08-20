import axios from "axios";
console.time()
const githubUsers = [
  "TPAteeq",
  "saad5032",
  "haider0107",
  "samreen95",
  "Armaan34",
  "jayesh5236",
  "syedaejaz",
];
let userData = [];

function hitGithub(username) {
  return axios.get(`https://api.github.com/users/${username}`, {
    auth: {
      username: "TPAteeq",
      password: "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",
    },
  });
} // this returns a promise

const users = githubUsers.map((ele) => hitGithub(ele));
console.log(users);

Promise.all(users).then( res =>{
    // console.log(res.length);
    res.forEach(ele =>{
        let obj = {}
        obj.name = ele.data.name
        obj.followers = ele.data.followers
        obj.following = ele.data.following
        userData.push(obj)
    })
    console.log(userData);
    console.timeEnd()
}).catch(err => console.log(err))