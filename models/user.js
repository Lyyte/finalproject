const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
// This model will create an object for each user with input from the signup form
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    default: 0
},
});
// eslint-disable-next-line no-undef
module.exports = User = mongoose.model("users", UserSchema);