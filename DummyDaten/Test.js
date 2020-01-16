const fs = require('fs');
var data;




fs.readFile('./DummyDaten/Arbeitsplan.json', function read(err,data) {
    if (err) {
        throw err;
    }
    const obj = JSON.parse(data);
    //const shareInfoLen = Object.keys(obj.shareInfo[i]).length;
    const array = Object.keys(obj);
    const arrayTag1 = obj[0];
    const Tag1nichtanwesend = arrayTag1[0];
    //const arrayTag2
    const arrayLength = Object.keys(array);
    const arrayLengthTag1 = Object.keys(arrayTag1);
    const arrayLengthTag1Nichtanwesend = Object.keys(arrayLengthTag1);


    console.log(arrayLength.length);
    console.log(arrayTag1.length);
    console.log(arrayLengthTag1Nichtanwesend.length);
    console.log(arrayLengthTag1Nichtanwesend[0]);

    arrayLength.forEach
})