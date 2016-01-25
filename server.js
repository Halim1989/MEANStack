// get our packages
var express = require('express');
var app = express();
var path = require('path');
var config = require('./config');

// configure public assets folder
app.use(express.static(__dirname + '/public'));

// route to send index.html
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// start the server
app.listen(config.port);
console.log('Magic happens on http://localhost:' + config.port);