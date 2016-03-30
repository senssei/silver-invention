var express = require('express');
var fs = require('fs');

var app = express();
var json = fs.readFileSync('api/data.json', "utf8");

app.use(express.static('app'));

app.get('/api/data', function (req, res) {
  res.send(json);
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});