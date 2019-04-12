const myLibrary = require('./myLibrary.js');
const fs = require('fs');

let jsonContents = fs.readFileSync('package.json','utf8');

//console.log(typeof jsonContents);

let convertedJson = JSON.parse(jsonContents);

//console.log('this is json parsed: ' + typeof convertedJson);

//console.log('this is the json author' + convertedJson.author);

//console.log('this is the addition of the method we created called the coolest... ' + myLibrary.theCoolestAdderEver(10,100));

//console.log(myLibrary.multiplier(3,4));

//console.log(myLibrary.subtractor(4,2));

console.log(myLibrary.stringCounter())

