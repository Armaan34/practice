import axios from "axios";

const sum = [];
console.time("block 1")

async function Main(){
    try {
        for(let i = 0, j = 5; i <=5 , j<=10; i++, j++){
            let res = await axios.get(`https://microfinance.progressi.studio/${i}/${j}`)
            sum.push(res.data.success)
        }
        console.log(sum);
        console.timeEnd("block 1")
    } catch (error) {
        console.log(error);
    }
}

Main()