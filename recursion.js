let x = function(){
x();
}
/////////////////////////////////////////////////////////

var count = 0;
let y = function(n){

count =count + n ;
if(n!=0){
  n = n-1;
y(n);
}

}
y(6);
console.log(count);
///////////////////////////////////////////////////

let add = n => {
if(n!=0){
          return n + add(n-1)
        }else{
          return 0;
        }
}
console.log(add(6));


///////////////////////////////////////////
