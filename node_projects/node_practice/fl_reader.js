const fs = require('fs');

let rawData = fs.readFileSync('pokemon.csv','utf8');

let linesArray = rawData.split('\n');



//console.log(linesArray[0]);
//console.log(linesArray[1]);
//console.log(linesArray[2]);

let headings = linesArray[0].split(',');
let pokemon1 = linesArray[1].split(',');


let pokemonObject = {
	[headings[0]]: pokemon1[0],
	[headings[1]]:pokemon1[1],
	[headings[2]]: pokemon1[2]
}


console.log(pokemonObject.Name);


