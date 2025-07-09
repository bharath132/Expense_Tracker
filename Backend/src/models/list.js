const mongoose = require("mongoose");

const TranscationSchema = new mongoose.Schema({
  name: String,
  type: String,
  desc: String,
  amount: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const TranscationList = mongoose.model("TranscationList", TranscationSchema);

module.exports = TranscationList;
