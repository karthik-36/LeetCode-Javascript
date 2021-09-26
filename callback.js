console.log("callback");


function callback(val) {
  console.log(val);
}



var fruits = ["banana", "apple", "pear"];
fruits.forEach(callback);

/////////////////////////////////////


let x = function (arg) {

  console.log("pass the whole damm  function " + arg);

}

let y = function (callback) {
  console.log("y do something");
  callback("arguement");

}


y(x);


///////////////////////////////////

var myArr = [
  {
    num: 5,
    str: 'apple'
  },
  {
    num: 7,
    str: 'cabbage'
  },
  {
    num: 1,
    str: 'bananna'
  },
  {
    num: 3,
    str: 'potato'
  },
  {
    num: 4,
    str: 'peas'
  }
]

myArr.sort(function (val1, val2) {
  if (val1.num > val2.num) {
    return -1;
  }
  else {
    return 1;
  }
}
);

console.log(myArr);
