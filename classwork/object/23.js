var { data } = require('./data.js')

 data.sort((a,b)=>{
    if(a.name < b.name) {
        return -1
    }else return 1
 })
console.log(data);