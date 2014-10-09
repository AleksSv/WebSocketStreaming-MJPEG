WebSocketStreaming-MJPEG
========================

How to deal with MJPEG streams with Web Sockets

MJPEG is a common streaming format for many web cameras, however there is no straightforeward way to integerate a MJPEG stream into a web page.

Simple Way
========================
Embedding the source stream in an <img> tag is one workaround, however it's success can vary. For instance, using PhoneGap this method would only work on Android Versions 4.4 +, and not Version 4.2.
