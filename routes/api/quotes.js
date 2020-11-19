const express = require('express');
const router = express.Router();

const Quote = require('../../models/Quote');

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

// @route   GET api/quotes/random
// @desc    Get random quote
// @access  Public
router.get('/random', async (req, res) => {
  try {
    const results = await Quote.aggregate([
      { $sample: { size: 1 } },
      {
        $lookup: { from: 'authors', localField: 'author', foreignField: '_id', as: 'authorInfo' },
      },
    ]);
    const quote = {
      id: results[0]._id,
      text: results[0].text,
      author: results[0].authorInfo[0].name,
    };
    res.json(quote);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

module.exports = router;
