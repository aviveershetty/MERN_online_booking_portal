const mongoose = require("mongoose");

const orderScheme = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quantity: String,
  location: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderScheme);
