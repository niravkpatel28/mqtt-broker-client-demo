// Import mongoose library
const mongoose = require("mongoose");

// Define MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/mqtt-database";

// Define MongoDB schema for messages
const MessageSchema = new mongoose.Schema({
  //   content: String,
  //   timestamp: { type: Date, default: Date.now },
  topic: String,
  message: mongoose.Schema.Types.Mixed,
});

// Define MongoDB model for messages
const Message = mongoose.model("Message", MessageSchema);

// Connect to MongoDB
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");

//     // Create a new message document
//     const newMessage = new Message({
//       content: "Hello MongoDB!",
//     });

//     // Save the message document to the database
//     newMessage
//       .save()
//       .then(() => {
//         console.log("Message saved successfully");
//       })
//       .catch((err) => {
//         console.error("Error saving message:", err);
//       })
//       .finally(() => {
//         // Close MongoDB connection
//         mongoose.connection.close();
//       });
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

module.exports = Message;
