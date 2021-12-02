const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  id: { type: Number },
  performer: { type: String },
  genre: { type: String },
  price: { type: Number },
  day: { type: Number },
  image: { type: String },
});

module.exports = mongoose.model('Concert', concertSchema);
