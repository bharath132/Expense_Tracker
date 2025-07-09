const mongoose = require("mongoose");
const formatToIST = () => {
  const date = new Date();

  // Convert to IST (UTC + 5:30)
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(date.getTime() + istOffset);

  const day = String(istDate.getDate()).padStart(2, '0');
  const month = istDate.toLocaleString('en-IN', { month: 'short' });
  const year = istDate.getFullYear();
  const time = istDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return `${day} ${month} ${year}, ${time} IST`;
};
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
    default: formatToIST
  }
});

const TranscationList = mongoose.model("TranscationList", TranscationSchema);

module.exports = TranscationList;
