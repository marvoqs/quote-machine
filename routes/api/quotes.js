const express = require('express');
const router = express.Router();

const Quote = require('../../models/Quote');

// @route   GET api/quotes
// @desc    Get all quotes
// @access  Public
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

// @route   GET api/quotes/random
// @desc    Get random quote
// @access  Public
router.get('/random', async (req, res) => {
  try {
    const results = await Quote.aggregate([{ $sample: { size: 1 } }]);
    const { _id: id, text, author } = results[0];
    const quote = { id, text, author };
    console.log(quote);
    res.json(quote);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

module.exports = router;
