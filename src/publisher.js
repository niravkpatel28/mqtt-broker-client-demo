const mqtt = require("mqtt");

// MQTT broker URL and port
const brokerUrl = "ws://localhost:1883";

// Connect to MQTT broker
const publisher = mqtt.connect(brokerUrl);

// Handle connection event
publisher.on("connect", function () {
  console.log("Publisher connected to MQTT broker");

  // Publish a message to a topic
  const topic = "test/helloworld";
  // const message = "Hello, MQTT from Publisher!";
  const message = { name: "Nirav", focus: "MQTT" };
  // publisher.publish(topic, message);
  publisher.publish(topic, JSON.stringify(message));

  console.log("Published message:", message, "on topic:", topic);

  // Close connection after publishing the message
  publisher.end();
});

// Handle error event
publisher.on("error", function (error) {
  console.error("Publisher MQTT Error:", error);
});
