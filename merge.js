/*
ckconsole.log("merge sort wohoo");
const mergeSort = function(arrA,arrB){
  console.log("merge called");
  let singleSorted = [];
  while(arrA.length && arrB.length){
        if(arrA[0] < arrB[0]){
          singleSorted.push(arrA[0]);
          arrA.shift();
        }
        else{
          singleSorted.push(arrB[0]);
          arrB.shift();

        }


  }

   return singleSorted.concat(arrA,arrB);

}


var a1= [1,4,7,8,10,18];
var a2 = [2];

console.log(mergeSort(a1,a2));
*/
