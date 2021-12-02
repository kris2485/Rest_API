const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  id: { type: Number },
  day: { type: Number },
  seat: { type: Number },
  client: { type: String },
  email: { type: String },
});

module.exports = mongoose.model('Seat', seatSchema);
