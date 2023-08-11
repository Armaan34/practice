import axios from "axios"
console.time("block 2")

const sum = []

function hitAPI(num1, num2){
    return axios.get(`https://microfinance.progressi.studio/${num1}/${num2}`)
}

const calls = [];

for(let i = 0, j = 5; i <=5 , j<=10; i++, j++){
    calls.push(hitAPI(i,j))
}

Promise.all(calls).then(responses =>{
    responses.forEach(ele =>{
        // console.log(ele.data.success);
        sum.push(ele.data.success)
    })
    console.log(sum);
    console.timeEnd("block 2")
}).catch(err => console.log(err))