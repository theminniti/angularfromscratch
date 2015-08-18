var express = require('express');
var app = express();
var api = require('./api');

app
  .use(express.static('./public'))
  .use('/api', api)
  .get('*', function(req, res){
      res.sendfile('public/main.html');
  })
  .listen(7000);
