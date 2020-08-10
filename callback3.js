//callback in order //1s -> "A" //1s -> "B" //1s -> "C" //3s -> "D is called"

function A(cb){
    setTimeout(()=> {
      console.log("A");
      cb();
    },1000)
}

function B(cb){
    setTimeout(() => {
      console.log("B");
      cb();
    },1000)
}

function C(cb){
    setTimeout(() => {
      console.log("C");
      cb();
    },3000)
}

function D(){
  console.log("D is called");
}


A(function(){
  B(function(){
    C(function(){
      D();
    })
  })
});
