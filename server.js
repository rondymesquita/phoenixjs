var express 		= require("express");
var http 			= require('http');
var path 			= require('path');
var app 			= express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'./')));
app.get("/", function (req, res) {
  res.redirect("/index.html");
});

var server = http.createServer(app).listen(app.get('port'),function(){
	console.log('==> Server started at '+ server.address().port);
});
