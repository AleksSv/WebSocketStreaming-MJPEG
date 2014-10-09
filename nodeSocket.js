var http = require('http');
var port = 8083;

var WebSocketServer = require('ws').Server
	, http = require('http')
	, express = require('express')
	, wss = new WebSocketServer({port: port});
//	, app = express();

//app.listen(port);
//app.use(express.static(__dirname + '/index.html'));

//var wss = new WebSocketServer({server: app});

wss.on('connection', function(ws)
{
	ws.on('message', function(message)
	{
		ws.send('Message: ' + message);
		console.log('Started Client Interval');

		ws.on('close', function() 
		{
			console.log('Stopping client interval');
		})

	});
	console.log('Connection Established');
	ws.send('Connection Sucessful');
});

console.log("Server running on port " + port + "\n");


/*
http.createServer(function(req, res)
{
	console.log(req.headers);
	console.log(req.method);
	console.log(req.url);
	console.log(req.headers.cookie);

	if(req.method == "GET")
	{
		res.writeHead(200, {"Content-Type":"text/plain"});
		res.end("GET request successful");
	}
	else
	{
		res.writeHead(501, {"Content-Type":"text/plain"});
		res.end("That option is not available");
	}


}).listen(port);
console.log("Server running on port " + port + "\n");
*/

