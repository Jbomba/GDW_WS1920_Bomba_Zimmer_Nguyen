const JSONReader = require ('./api/JSONReader.js');

JSONReader.readJSON('user.json',(err,result)=> {
    console.log(result);
})

JSON.parse()