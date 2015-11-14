// setup Express
var app = require('./models/express.js');

// setup mongoose
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/list');

// models
var api = require('./models/api.js');
var User = require('./models/user.js');
var Item = require('./models/item.js');

// start the server
var server = app.listen(3000, function () {
    console.log("Started on port 3000");
    var host = server.address().address;
    var port = server.address().port;
});
