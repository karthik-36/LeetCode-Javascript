var  arr = [1,2,3,4,5,6,7];


function binarySearch(arr,value){
var low = 0;
var high = arr.length - 1;
  while(arr[mid] != value){
    var mid = (low + high) >>> 1;
    if(arr[mid] < value){
      low = mid+1;
    }
    else{
      high = mid-1;
    }
  }
return mid;
}


function binaryInsert(arr,value){
var low = 0;
var high = arr.length - 1;
    while(high - low != 3){
      console.log(high-low);
      var mid = (low + high)>>>1;
      if(arr[mid] < value ){
        low = mid;
      }
      else if(arr[mid] > value){
        high = mid;
      }

    }
    arr.splice(mid,0,value);
}

console.log(arr);
//console.log("index at " + binarySearch(arr,2));
console.log("index at " + binaryInsert(arr,2));
console.log(arr);
//arr.splice(2,0,5);
//console.log(arr);
