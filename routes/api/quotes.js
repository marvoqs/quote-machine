const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
});

const Quote = mongoose.model('quote', QuoteSchema);

// @route   GET api/quotes
// @desc    Get all quotes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ date: -1 });
    res.json(quotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

module.exports = router;
