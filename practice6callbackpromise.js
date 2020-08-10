
//async print, array with n number of functions.

function A(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("A");
        resolve();
    }, 2000);
  })
}

function B(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("B");
      resolve();
    }, 2000);
  });
}

function C(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("C");
      resolve();
    },2000);
  })
}

function D(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("D");
      resolve();
    } , 2000);
  });
}

function E(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("E");
      resolve();
    } , 2000);
  });
}

let arr = [A,B,C,D,E];

async function display(){
  for(var i = 0 ; i < arr.length ; i++){
    await arr[i]();
  }
}

display();
// displays A B C D E in order with array

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//pisplay in order with thens
/*
A()
.then(() => B())
.then(() => C())
.then(() => D())
.then(() => E())
.then(() => console.log("printed in order with thens"))
.catch((error) => console.log("some error"))
*/





/*
let x = 1 + 2 + 4 + '2'
console.log(x);
console.log(typeof x);
*/
/*
async function display(){
  let temp = await A();
  console.log(temp)
  let temp2 = await B(temp);
  console.log(temp2);
  let temp3 = await C(temp2);
  console.log(temp3);
  let temp4 = await D(temp3);
  console.log(temp4);
}

display();
*/
/*
A()
.then(() => B())
.then(() => C())
.then(() => D())
.catch((error) => console.log("error called"))
*/
