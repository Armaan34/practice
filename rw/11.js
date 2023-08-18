import axios from "axios"

// axios.get("https://jsonplaceholder.typicode.com/users").then((res => {
//     console.log(res.data)
// })).catch(err => console.log(err))

// Async Await


async function hitAPI(){
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log("hi");
        res.data.forEach(element => {
            console.log(element.username);
        });
    } catch (error) {
        console.log("error block");
        console.log(error);
    }
}

hitAPI()