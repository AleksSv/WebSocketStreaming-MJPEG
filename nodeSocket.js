var http = require('http');
var port = 8083;

var WebSocketServer = require('ws').Server
	, http = require('http')
	, express = require('express')
	, wss = new WebSocketServer({port: port});

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
