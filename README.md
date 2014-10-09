WebSocketStreaming-MJPEG
========================

How to deal with MJPEG streams with Web Sockets

MJPEG is a common streaming format for many web cameras, however there is no straightforeward way to integerate a MJPEG stream into a web page.

Simple Way
========================
Embedding the source stream in an <img> tag is one workaround, however it's success can vary. For instance, using PhoneGap this method would only work on Android Versions 4.4 +, and not Version 4.2.

Goal
======================
Create a Nodejs server that handles streams in a more eloquent way

WebSocket Library => https://github.com/einaros/ws
npm install ws
Express Library => http://expressjs.com/
npm install express

Troubles
=======================
One significant trouble I had was the "handshake" failure error, which prevented a connection being established. Fortunately, I fixed this by directing giving the WebSocket its own port.
