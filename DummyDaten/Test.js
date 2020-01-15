const test = "Test";
console.log(test);

"use strict";

fetch("./Arbeitsplan.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    });
