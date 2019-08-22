'use strict';

var express = require('express');
var cors = require('cors');
var router = require('./routes/router')


var app = express();

app.use(cors());
app.use(express.static(process.cwd() + '/public'));
app.use('/', router);



app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
