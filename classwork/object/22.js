var { data } = require('./data.js');

var data = utils.data
data.sort((a,b)=>{
    return b.id - a.id
})
console.log(data);