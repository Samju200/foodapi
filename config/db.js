const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const app = express()
// const PORT = process.env.PORT || 3000

const connectionDb = () => {
  try {
    const uri = process.env.CONNENCTION_URL;
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("MongoDB database connection established successfully");
    });
  } catch (error) {
    console.log("MongoDB database connection unsuccessfully");
  }
};
// const connectionDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

module.exports = connectionDb;
