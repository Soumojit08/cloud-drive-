const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    minlength: [3, "Username must be at least 3 characters long"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    minlength: [13, "email must be at least 10 characters long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "password must be at least 5 characters long"],
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
