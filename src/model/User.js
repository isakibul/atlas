const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    maxLength: 50,
    minLength: 2,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
