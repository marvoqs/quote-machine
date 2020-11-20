const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    ref: 'author',
  },
});

module.exports = Quote = mongoose.model('quote', QuoteSchema);
