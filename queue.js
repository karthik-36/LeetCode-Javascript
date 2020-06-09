 var arr = [];

Array.prototype.enque = function(value){
  this.push(value);
}

Array.prototype.deque = function(){
  this.shift();
}

console.log(arr);
arr.enque(35);
arr.enque(6);
console.log(arr);
arr.deque();
console.log(arr);
