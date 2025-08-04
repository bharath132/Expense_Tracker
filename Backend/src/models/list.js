const mongoose = require("mongoose");
const formatToIST = () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 5.5 * 60 * 60 * 1000);
  console.log(istTime);
  return istTime; // ⬅️ return as Date object
};


console.log(formatToIST());

const TranscationSchema = new mongoose.Schema({
  name: String,
  type: String,
  desc: String,
  amount: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const TranscationList = mongoose.model("TranscationList", TranscationSchema);

module.exports = TranscationList;
