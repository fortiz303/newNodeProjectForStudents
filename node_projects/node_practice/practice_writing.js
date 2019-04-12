const fs = require('fs');

let human = {
	arms: 2,
	legs: 2,
	eyes: 2,
	name: 'pancho',
	address: '123 happy st'
};

console.log(human)

human.address = '234 sad st'

console.log(human)

let dataToStore = JSON.stringify(human);

fs.writeFileSync('savedhuman.json',dataToStore,'utf8')
