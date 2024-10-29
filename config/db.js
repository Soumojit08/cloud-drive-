const mongoose = require("mongoose");

function connectToDB() {
  console.log("MONGO_URI:", process.env.MONGO_URI);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error("Connection Failed", err));
}

module.exports = connectToDB;
