// console.log('Hi');
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
//     setTimeout(() => {
//         console.log(i);
//     }, 5000);
// }
// console.log('Bye');

console.log('Hi');
for (let i = 1; i <= 5; i++) {
    console.log(i);
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}
console.log('Bye');