const aedes = require("aedes")();
const server = require("aedes-server-factory").createServer(aedes, {
  ws: true,
});

const port = 1883;

server.listen(port, function () {
  console.log("server started and listening on port ", port);
});
