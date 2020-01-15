const test = "Test";
console.log(test);

const fs = require('fs');
var content;



fs.readFile('./DummyDaten/Arbeitsplan', function read(err,data) {
    if (err) {
        throw err;
    }
    content = data;
    const obj = JSON.parse(content);
console.log(obj);
console.log();

const arrayTag1 = obj[0];
console.log(arrayTag1);
console.log();

const nichtanwesendTag1 = arrayTag1[0];
console.log(nichtanwesendTag1);
console.log();

const person1NichtanwesendTag1 = nichtanwesendTag1[0];
console.log(person1NichtanwesendTag1.name);

})








