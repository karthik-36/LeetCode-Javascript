function sum(a,b){
  return a+b;
}


let sum2 = (a,b) => {
  return a+b;
}

let sum3 = (a,b) => a+b;

/////////////////////////////////

function isPositive(number){
return number >= 0;

}

let isPositive2 = number =>{
  return number >= 0;
}

let isPositive3 = number => number >= 0;

///////////////////////////////


function randomNumber(){
return Math.random;
}

let randomNumber2 = () =>{
  return Math.random;
}

let randomNumber3 = () => Math.random

console.log(isPositive3(-2));


let func = function(arg){
  console.log("arg " + arg);
}

function kars(func){
console.log("kars is here");
  func("test4");
}

kars(func);
