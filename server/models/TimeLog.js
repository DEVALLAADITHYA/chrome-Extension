const mongoose = require("mongoose");

const timeLogSchema = new mongoose.Schema({
  url: { type: String, required: true },
  duration: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TimeLog", timeLogSchema);
