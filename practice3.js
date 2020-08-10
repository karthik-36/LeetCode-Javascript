console.log("hello world");


let f1 = function(user){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      //console.log("hello : " + user);
      resolve({user : user});
    },5000);
  });
}

f1();

let arr = new Array(10);
for(let i = 0 ; i < 10 ; i++){
  arr[i] = f1;
}

arr.forEach((item) => {item("karthik Singh").then((user) => {console.log(user)})})



let arr2 = [1,2,3,4,5,6];
//console.log(arr2.filter((ele) =>{ return ele > 2 }));
let reducer = (acc,curr) =>  acc + curr;

console.log("reducer : " +  arr2.reduce(reducer,5));
