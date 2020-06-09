var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api-dev-frc.eu.kone.com/kone-e-solutions/api/v1.0/materials/KM1376516G01?revision_code=B',
  'headers': {
    'Authorization': 'Basic ZGVlY2QyNTI0ZmZkNGIxMzk0NzQ5NGFhMWZlNzk5NjM6Nzg0NDZGQjdmMjQyNDc0RWFERmM2MEQxNjQ4Rjk0OTE='
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
