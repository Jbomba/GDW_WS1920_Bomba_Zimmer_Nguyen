const JSONReader = require ('./myModules/mymodule.js');

JSONReader.readJSON('cities.json',(err,result)=> {
    console.log(result);
})
