const fs = require('fs');

let rawData = fs.readFileSync('data.json', 'utf8');

let dataObject = JSON.parse(rawData);

console.log(dataObject.data[1])
