const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_URI in .env file.");
}

async function database() {
  try {
    await mongoose.connect(MONGODB_URI, { bufferCommands: false }).then(() => {
        console.log("Connected to MongoDB");
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = database;
