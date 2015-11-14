var express = require('express');
var app = express();

// setup static directory
app.use(express.static('public'));

module.exports = app;
