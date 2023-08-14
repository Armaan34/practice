/*

What is a promise?

How to consume a promise?

How to write a custom promise
*/

import axios from "axios"

// let data = axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(data);

console.time()
axios.get("https://jsonplaceholder.typicode.com/users").then((res => {
    console.log(res.data)
    console.timeEnd()
})).catch(err => console.log(err))