const _ = require('lodash');
const fs = require('fs')

let contents = fs.readFileSync('sample.txt','utf8');

let dataToWrite = contents + '\nI was added to the previous text';

fs.writeFileSync('sample.txt', contents +  '\n hi there i was added by JS','utf8');

fs.writeFileSync('../outside.txt', 'hello world', 'utf8');

<<<<<<< HEAD

console.log('hello');
=======
>>>>>>> 7d0b5c093ad19d5b0ecd7b5359f5ea42256fe511
