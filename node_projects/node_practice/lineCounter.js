const _ = require('lodash');
const fs = require('fs');

//READ THE FILE
let data = fs.readFileSync('iso_8859-1.txt','utf8');

//SEPARATE EACH WORD WITH THE FOLLOWING METHOD
let exploded = data.split(' ');
let checkEachChar = data.split('');

function wordCount(str){
let totalSpaces = 0;
 for(let i = 0; i < exploded.length; i++){
  if (exploded[i] == ''){
   console.log('no word is here!' + exploded[i] );
   totalSpaces += 1;
   console.log(totalSpaces);
  }
 }
 console.log('the total amount of words is: ' + (exploded.length - totalSpaces));  
}
wordCount(exploded);


//CHECK FOR NUMBERS INSIDE DATA
function checkNumbers(data){
let totalNums = 0;
 for(let i = 0; i < checkEachChar.length; i++ ){
  if(checkEachChar[i] == 1 || checkEachChar[i] == 2 || checkEachChar[i] == 3 || checkEachChar[i] == 4 || checkEachChar[i] == 5 || checkEachChar[i] == 6 || checkEachChar[i] == 7 || checkEachChar[i] == 8 || checkEachChar[i] == 9){
  console.log('there is a number in here! ' + checkEachChar[i]);
  totalNums = totalNums + 1;
  console.log(totalNums);
  }
 }
}
checkNumbers(checkEachChar);
