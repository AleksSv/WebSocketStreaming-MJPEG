WebSocketStreaming
========================
How to deal with MJPEG streams with Web Sockets

MJPEG is a common streaming format for many web cameras, however there is no straightforeward way to integerate a MJPEG stream into a web page.

Simple Way
========================
Embedding the source stream in an <img> tag is one workaround, however it's success can vary. For instance, using PhoneGap this method would only work on Android Versions 4.4 +, and not Version 4.2.

Goal
======================
Create a Nodejs server that handles streams in a more eloquent way

Libraries
=====================

WebSocket Library => https://github.com/einaros/ws

npm install ws

Express Library => http://expressjs.com/

npm install express

https://github.com/joewalnes/reconnecting-websocket

reconnecting-websocket.js => This was an interesting api I've found that simply makes websockets automatically reconnect.

Troubles
=======================
One significant trouble I had was the "handshake" failure error, which prevented a connection being established. Fortunately, I fixed this by directing giving the WebSocket its own port.

I also didn't figure out a direct way for node to interact with MJPEGS without directly converting the stream itself to a more palatable format on the hosting device.

Success
======================
Fortunately, I was able to implement a messaging system that builds upon the previous exploration assignment 1. 

Future Goals
=====================
Install a Node Server to work with a Motion stream converter so that Nodejs has better data to work with.
