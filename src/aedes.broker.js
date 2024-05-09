const mongoose = require("mongoose");
const aedes = require("aedes")();
const server = require("aedes-server-factory").createServer(aedes, {
  ws: true,
});

const port = 1883;
const mongoURI = "mongodb://localhost:27017/mqtt-database";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .then(() => {
    server.listen(port, function () {
      console.log("server started and listening on port ", port);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
