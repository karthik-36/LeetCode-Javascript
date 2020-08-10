"use strict";
console.log("hello world");
var axios = require('axios');

console.log("start");

let userLogin = function(user,mail){
return new Promise((resolve,reject) =>{
    setTimeout(() => {
      console.log("half")
      resolve({
        user : user,
        mail : mail
      });
      reject(new Error("Error1"));
    },2000);
  });
};

let getUserVideo = function(user){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log([user,'video1' , 'video2' , 'video3']);
    if(2 == 2){
      resolve([user,'video1' , 'video2' , 'video3']);
    }else{
      reject(new Error("Error2"));
    }
  },6000);
  })
};

let videoDetails = function(secondVideo){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(secondVideo + " this is second video");
      reject(new Error("Error3"));
    } , 2000)
  })
};

let videoDetails2 = function(send){

  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve();
    } , 3000);
  });

}


async function displayFunction(){
    let step1 = await userLogin("karthik" , "karthik@gmail.com");
    console.log(step1.user);
}

displayFunction();
Promise.all([userLogin("karthik36" , "karthik2singh@gmail.com"),getUserVideo(["video2"])]).then((result) => {

  //console.log("multiple results :  " + result)
  //console.log("result1 : " + result[0].user + "    " + result[1][3])

//});
/*
userLogin("karthik" , "karthik@gmail.com")
.then((res) => getUserVideo(res.user))
.then((list) => videoDetails(list[1]))
.then((finalMsg) => { console.log(finalMsg); })
.catch((err) => console.log({err : err}))
*/
console.log("End");


//console.log(obj2);
/*
let x = new Promise((resolve,reject) => {
  resolve("karthik is handsome");
});

x.then((messg) => {
  console.log("message");
})


let pro = new Promise((resolve,reject) => {
  if(1 == 1){
    resolve({ user : "karthik singh"});
  }
  else{
    reject(new Error('user not logged in'));
  }
});

pro.then((user) => {
  console.log("hellooooo : " + user.user);
})

const promise = new Promise((resolve , reject) => {
  setTimeout(() => {
  //  reject({err : "error message"});
    resolve(new Error('User not logged in'));
  },3000);
});


promise.then(user => {
  console.log(user);
}).catch((err) => {
  console.log(err);
})


function videoDetails(user,callback){
  setTimeout(() => {
    console.log("inside video : ");
    callback(user);
  },3000);
}


function loginUser(mail,password ,callback){


setTimeout(function(){
    console.log("2nd?");
      console.log("email ij : " + mail);
      callback(mail);
    }, 4000);

}


const user = loginUser("username@gmail.com" , 123456 , (user) => {
  console.log("1st : " + user);
  videoDetails(user,() => {
    console.log("inside video callback");
  })
});


function buildFunction() {

  var arr = [];
  for(let j = 0; j < 3; j++) {
       //Using let to assign j
    arr.push(
      function(){
        console.log(j);
      }
    )
  }
   return arr;
}

var fs = buildFunction();
fs[0]();
fs[1]();
fs[2]();

var x = 2;
function f1(){
  x = 1;
}

f1();

console.log(x);
f1();
var myArray = ['a','b','c','d'];
myArray = ["xyz",...myArray,"123"];
console.log(myArray);
console.log(null == undefined)
/*
var x = 10;
var girl = function(){
  var x;
  console.log(x);
   x = 8;
}

girl();

let obj = {
  a : "12",
  b : "34",
  c : "56",
  d : "78",
  e : {t:"666"}
}

console.log(obj);

let obj2 = {};

Object.keys(obj).forEach((item,index) => {


console.log(item,index);
console.log(obj[item]);
obj2[item] = obj[item];
});
obj.e.t = "kio";
console.log(obj);
/*
for(var i = 0 ; i < 5 ; i++){
  (function(x){
    console.log("x : " + x)
    setTimeout(function(){ console.log(x)},x * 1000);
  }(i));
  }
*/
/*
  for (var i = 0; i < 10; i += 2) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
if(1){
console.log(5000 && 0)
}
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
console.log(sum(1)(2));
*/


/*
var length = 10;
function fn() {
	console.log(this.length);
}
var obj = {
  length : 5,
  method : function(fn){
    console.log(this.length);
    console.log(arguments);
    arguments[0]();
  }
}

obj.method(fn,4,5,6);
function isPal(str){
  console.log(str.split('').reverse().join('') == str);
}

isPal("xyyx");

console.log(Number.EPSILON);
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);
console.log(0.1 + 0.2 - 0.3);


function isInt(x){
  return (x^0) === x;
}

console.log(isInt("aba"));

//console.log(0.1 + 0.2 == 0.3);
console.log(isNaN('ab'));

function loginUser(email,password , call){
  setTimeout(function(){
    call({useremail : email} , 123456)
    return {useremail : email};
  },3500);
}


function call2(ar){
  ar.forEach((item) => {
    console.log("inside final call");
    console.log(item);
  })
}


var object = {foo: "baz" ,  foo: "bar" };
console.log(object.foo);

function getUserVideo(email , call2){
  setTimeout(() => {
    call2(["video1","video2","video3"]);
    return ["video1","video2","video3"];
  }, 3000);
}

let xyz = function(obj,num){
  console.log("xyz email is : " + obj.useremail + " and number is  : " + num);
  getUserVideo(obj.useremail,call2)
}

loginUser("kkk", "12345" , xyz );
*/

/*
let preOrder = function(node){
  if(node != null){
      console.log(node.val);
        preOrder(node.left);
        preOrder(node.right);
  }
}


let arr = [ function(i){console.log("hello")}  , function(i){console.log("hello1")}   , function(i){console.log("hello2 i: " + i )}  ];

for(var i = 0 ;  i < arr.length ; i++){
  arr[i](i);
}


preOrder(root);
*/
/*
console.log("Start");

  let one = function(a,b){
    console.log("a + b is : " + (a + b));
    console.log("ca ca caacaaal back");
  }

  function two(a,b,c,d,one){
    console.log(a+b+c+d);
    let y = 1000;
    let x = a+b+c+d;
    one(x,y);
  }

  two(5,6,7,4,one);
  const items = [1,2,3,4,5];

  items.forEach((item,index) => console.log(index , item));
*/

/*
let config = {
  url : "https://swapi.dev/api/people/1",
  method : 'GET'
}

async function  makeRequest(){
axios(config).then((response) => {
  console.log("step 1");
  console.log(response.data);
  return response.data.name;
})
.then((name) => {
  console.log("step2");
  console.log( " name from promise 1 is :  " +  name);
  return name + " says Hi";
})
.catch(err => console.log(err));
}

async function makecall(){
  let name = await makeRequest();
  console.log("final name is : " + name);
}

makecall();
*/
