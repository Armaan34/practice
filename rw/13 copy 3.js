import {setTimeout} from "timers/promises"
// This is last covered

// setTimeout(()=>{
//     console.log("hii");
// }, 2000)

async function test(){
    try {
        await setTimeout(5000)
        console.log("hello");
    } catch (error) {
        console.log(error);
    }
}

test()