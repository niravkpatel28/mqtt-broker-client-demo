# MQTT Demo: Publisher and Subscriber

This repository contains a simple demonstration of using MQTT (Message Queuing
Telemetry Transport) with a publisher and a subscriber. MQTT is a lightweight
messaging protocol commonly used in IoT (Internet of Things) applications for
communication between devices.

## Getting Started

To run the MQTT demo, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running locally

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/niravkpatel28/mqtt-broker-client-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mqtt-broker-client-demo
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

### Usage

#### Starting the MQTT Broker

Before running the publisher and subscriber, you need to start an MQTT broker.

#### Starting the Broker

1. Open a terminal and navigate to the project directory.
2. Run the following command to start the MQTT broker:

   ```bash
   npm run broker
   ```

#### Starting the Subscriber

1. Open another terminal and navigate to the project directory.
2. Run the following command to start the subscriber:

   ```bash
   npm run subscribe
   ```

   The subscriber will start listening for messages on the specified MQTT topic
   and display any messages received.

#### Starting the Publisher

1. Open another terminal and navigate to the project directory.
2. Run the following command to start the publisher and send a message to the
   MQTT broker:

   ```bash
   npm run publish
   ```

   The publisher will send a message to the specified MQTT topic.

### Customization

- Modify the publisher and subscriber code to suit your specific use case or
  integration requirements.

## Acknowledgments

- Special thanks to the [MQTT.js](https://github.com/mqttjs/MQTT.js) library for
  making MQTT integration easy in Node.js applications.
