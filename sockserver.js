var net = require('net');
var out = console.error;


var server = new net.Server();
server.on("error", function(e) {
  out("server error:", e);
});
server.on("connection", function(socket) {
  out("connection:", socket);
  socket.on("data", function(data) {
    out("data from client: ", data)
  });
  socket.write("hi from the server, your fd is "+socket.fd);
});

server.listen("/tmp/sockplay");


