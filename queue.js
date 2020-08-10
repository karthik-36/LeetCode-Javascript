 var arr = [];

 Array.prototype.enque = function(value) {
   this.push(value);
 }

 Array.prototype.deque = function() {
   this.shift();
 }

 let arr2 = [];

 arr2.push(1);
 arr2.push(2);
 arr2.push(3);
 arr2.push(4);

 console.log(arr2);

 arr2.pop();



 console.log(arr2);


 for (var i = 0, l = arr2.length - 1; i < arr2.length; i++) {

 }
 let arr3 = arr2;
 console.log(arr3);