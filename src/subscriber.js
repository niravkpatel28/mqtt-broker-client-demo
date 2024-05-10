const mqtt = require("mqtt");
const mongoose = require("mongoose");
const Message = require("./utils/message.schema");

// MQTT broker URL and port
const brokerUrl = "ws://localhost:1883";

// Connect to MQTT broker
const subscriber = mqtt.connect(brokerUrl);

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
});

// Handle error event
subscriber.on("error", function (error) {
  console.error("Subscriber MQTT Error:", error);
});
