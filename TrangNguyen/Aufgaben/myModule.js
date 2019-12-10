//aufgabe3.2
const fs = require('fs')

const readJSON = (path, callback)=>{
    fs.readFile(path, 'utf8', callback)
}

const saveJSON = (path, callback)=>{
    fs.writeFile(path,'utf8', callback)
}

module.exports = {
    readJSON,
    saveJSON
}

const findCity = (name)=>{

}

const deleteCity = (name)=>{

}

const addCity = (name)=>{
    
}
