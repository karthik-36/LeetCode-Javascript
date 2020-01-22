let p = new Promise((resolve,reject) => {
  let a = 1+1;
  if(a==2){

    resolve('Success','s22')
  }else{

    reject('reject')
  }


});

p.then((message,s2)=> {
  console.log(message + "  " + s2);
}).catch((messsage) => {
console.log("in catch "+ message);

});
