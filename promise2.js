//
console.log("array of functions with dependency from previous promise.");

function f1(num){
  if(num == undefined){
    num = 5;
  }
  return new Promise((resolve) => {
    setTimeout(()=> {
        resolve(num+5);
    },2000)
  });
}

function f2(num){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num+5);
    },2000)
  })
}

function f3(num){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num+5);
    },2000)
  })
}

function f4(num){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num+5);
    },2000);
  });
}

let arr = [f1,f2,f3,f4];
console.log(arr);

async function display(){
let tempNum;
  for(var i = 0 ; i < arr.length ; i++){
    tempNum = await arr[i](tempNum);
    console.log(tempNum);
  }
}

display();
