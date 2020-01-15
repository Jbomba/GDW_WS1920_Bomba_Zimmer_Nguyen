const fs = require('fs');
var content;

const test = ["Test1", "Test2", "Test3"]


fs.readFile('./DummyDaten/Arbeitsplan', function read(err,data) {
    if (err) {
        throw err;
    }
    content = data;
    const obj = JSON.parse(content);
    const shareInfoLen = Object.keys(obj.shareInfo[i]).length;
console.log(obj);
console.log();

const arrayTag1 = obj[0];
console.log(arrayTag1);
console.log(shareInfoLen);

const nichtanwesendTag1 = arrayTag1[0];
console.log(nichtanwesendTag1);
console.log();

const person1NichtanwesendTag1 = nichtanwesendTag1[0];
console.log(person1NichtanwesendTag1.name);

})








