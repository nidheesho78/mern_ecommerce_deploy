// import mongoose from 'mongoose';
const mongoose = require("mongoose");
// import dotenv from 'dotenv';
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const connect = await mongoose
      .connect(
        process.env.MONGO_URI
      )
      .then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  connectDB,
};
