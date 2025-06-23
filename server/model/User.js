const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  emailAddress: {
    type: String,
    required: [true, "Email is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
  },
  plan: {
    type: String,
    default: "Arcade",
  },
  duration: {
    type: String,
    default: "Monthly",
  },
  addOns: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
