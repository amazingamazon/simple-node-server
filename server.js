var http = require("http");
var fs = require("fs");
var index = fs.readFileSync("index.html");

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(index);
  fs.readFile("index.html", function(err, data) {
  	if(err) {
  		console.log("Unknown Error");
  		return;
  	};
  	console.log(data);
  });
});
 
server.listen(3000);
console.log("Server is listening");
