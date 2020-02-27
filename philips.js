




//'use strict';

const fs = require('fs');

var rawdata = fs.readFileSync('tokenvalues.json');
var fileread = JSON.parse(rawdata);
console.log(fileread.access_token);
console.log(fileread.refresh_token);

var data =
  {
      "access_token":"vfrzsdrgs",
      "access_token_expires_in":"86399",
      "refresh_token":"AaVBPYuxs6MxGTFasV7QdZ20Yq7unwVo",
      "refresh_token_expires_in":"172799",
      "token_type":"BearerToken"
  }

fs.writeFileSync ("tokenvalues.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
});


//rawdata = fs.readFileSync('tokenvalues.json');

fileread = JSON.parse(rawdata);

  var rawdata2 = fs.readFileSync('tokenvalues.json');
  var fileread2 = JSON.parse(rawdata2);
  console.log("modified " + fileread2.access_token);
  console.log("modified  " + fileread2.refresh_token);
