const fs = require('fs');

let contents = fs.readFileSync('../dataset_project/README.md', 'utf8')

let rawData  = fs.readFileSync('example.json','utf8')

console.log('this is the typeof ' + typeof rawData)
//let parsedContents = fs.readFileSync('','')

let example = '{HELLO: HI}';

let parsedObject = JSON.parse(rawData);

console.log(typeof parsedObject)

console.log(parsedObject)

//console.log(contents);
//console.log(parsedJson);
console.log(parsedObject.glossary.GlossDiv.GlossList.GlossEntry.GlossTerm)
