var port = process.env.PORT || 5000;

var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get("/", function(req, res) {
	res.send("<title>Hagever.</title><h1>Gal Hagever. ve gam Kfir.</h1>");
});

server.listen(port, function() {
	var address = server.address();
	console.log("listening on " + address.address + ":" + address.port);
});
