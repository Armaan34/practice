import axios from "axios"


const githubUsers = ["TPAteeq", "saad5032", "haider0107", "samreen95", "Armaan34", "jayesh5236", "syedaejaz"]
let userData = []


function hitGithub(username){
    return axios.get(`https://api.github.com/users/${username}`, {
        auth : {
            username : "TPAteeq",
            password: "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"
        }
    })
} // this returns a promise


githubUsers.forEach((ele,i) =>{
    hitGithub(ele).then(res=>{
        console.log(res.data.followers , ele , i);
        let obj = {}
        obj.name = res.data.name
        obj.followers = res.data.followers
        obj.following = res.data.following
        userData.push(obj)
    }).catch(err => console.log(err))
})

setTimeout(()=>{
    console.log(userData);
},5000) // badddd