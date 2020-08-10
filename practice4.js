console.log("hello world");

function f1(){
  console.log(this);
}

let f2 = () => {
  console.log(this);
};

var t = 99;
let obj = {
  x : 10,
  method : function() {console.log("this : " + this.x + "   t : " + t)
                        return 103;}
}

//f1();
//f2();

console.log(obj.method.bind(obj)());

let arr = [1,4,3,2,5,6,8,7,7];

let map = new Map();

for(var i = 0 ; i < arr.length  ;i++){
  if(map.has(arr[i])){
    map.set(arr[i], map.get(arr[i]) + 1 )
  }else{
    map.set(arr[i] , 1);
  }
}

console.log(map);

for(let [key,value] of map){
  console.log(key + "   " + value);
}


let set1 = new Set();
set1.add(1);
set1.add(2);
console.log(set1.has(3));
console.log(set1);


let obj2 = {
  x : "x marks the spot",
  method : function(){
    console.log( this.x + " is called ")
  }
}

obj2.method();
let loose = obj2.method.bind(obj2);
loose()
