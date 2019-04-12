function adder(num1, num2){
<<<<<<< HEAD
 return num1 + num2;
=======
  return num1 + num2
>>>>>>> 7d0b5c093ad19d5b0ecd7b5359f5ea42256fe511
}

function subtractor(num1, num2){
 return num1 - num2;
}

function multiplier(num1,num2){
<<<<<<< HEAD
 return num1 * num2;
=======
  return num1 * num2;
>>>>>>> 7d0b5c093ad19d5b0ecd7b5359f5ea42256fe511
}

function divider(num1,num2){
 return num1/num2;
}

function stringCounter(data){
<<<<<<< HEAD
 return data.length
})
=======

 if (typeof data == 'string'){
 console.log(data.length)
 }
 else if(typeof data == 'boolean'){
 console.log('-1')
 }
 else if (Array.isArray(data)){
 console.log(data.length) 
 }
 else if(typeof data == 'undefined'){
 console.log('-1')
 }
 else if(typeof data == 'object'){
 console.log(Object.keys(data).length)
 }
}
>>>>>>> 7d0b5c093ad19d5b0ecd7b5359f5ea42256fe511

module.exports = {
  adder,
  multiplier,
  subtractor,
  stringCounter
<<<<<<< HEAD


=======
>>>>>>> 7d0b5c093ad19d5b0ecd7b5359f5ea42256fe511
};
