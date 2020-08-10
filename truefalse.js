//: false  1 > 2 is false and converted to 0 , 0 + 3
function f1(callback){
  setTimeout(() => {
    console.log("f1 is called");
    callback();
  } , 2000)
}

function f2(callback){
  console.log("f2 is called");
  setTimeout(function(){
    callback();
  },2000)
}

function f3(callback){
  console.log("f3 is called");
  setTimeout(function(){
    callback();
  },2000)
}

function f4(callback){
  console.log("f4 is called");
  setTimeout(function(){
      callback();
  },2000);
}


f4(() =>{
  f3(() => {
    f2(() => {
      f1(() => {
        console.log("all is done");
      })
    })
  })
})
