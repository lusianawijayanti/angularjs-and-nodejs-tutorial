var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	//res.write(req.url);
	//res.write("The date and time are currently: " + dt.myDateTime());
    res.end(txt);
}).listen(8013);

//http://localhost:8013/?year=2017&month=July