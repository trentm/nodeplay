var net = require('net');
var out = console.error;

var socket = new net.Socket({type: "unix"});
socket.on("data", function(data) {
  out("data:", data);
});
socket.on("connect", function() {
  out("socket connect");
});
socket.on("end", function() {
  out("socket end");
});
socket.connect("/tmp/sockplay");


