var net = require('net');
net.createServer(function (socket) {
  console.log("got connection");
  socket.setEncoding("utf8");
  socket.write("Echo server\r\n");
  socket.on("data", function (data) {
    socket.write("XXX: " + data);
  });
  socket.on("end", function () {
    socket.end();
  });
}).listen(8000, "localhost");

// another no-op
// another no-op
// another no-op
// no-op for TOOLS-123
// another no-op for TOOLS-123

