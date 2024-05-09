const mqtt = require("mqtt");
const mongoose = require("mongoose");
const Message = require("./utils/message.schema");

// MQTT broker URL and port
const brokerUrl = "ws://localhost:1883";

// Connect to MQTT broker
const subscriber = mqtt.connect(brokerUrl);
const mongoURI = "mongodb://localhost:27017/mqtt-database";

mongoose.connect(mongoURI).then((connection) => {
  console.log("Connected to database 🟢");
});

// Handle connection event
subscriber.on("connect", function () {
  console.log("Subscriber connected to MQTT broker");

  // Subscribe to a topic
  const topic = "test/topic";
  subscriber.subscribe(topic);
  console.log("Subscribed to topic:", topic);
});

// Handle message event
subscriber.on("message", function (topic, message) {
  console.log("Received message:", message.toString(), "on topic:", topic);
  const dbData = new Message({
    topic: topic,
    message: JSON.parse(message),
  });
  dbData
    .save()
    .then((data) => {
      console.log("data saved successfully", data);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
});

// Handle error event
subscriber.on("error", function (error) {
  console.error("Subscriber MQTT Error:", error);
});
