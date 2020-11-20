const express = require('express');
const router = express.Router();

const Quote = require('../../models/Quote');

// @route   GET api/quotes
// @desc    Get all quotes
// @access  Public
router.get('/', async (req, res) => {
  try {
    // user is searching checker
    const isSearching = () => req.query.s !== undefined && req.query.s !== '';
    // if user is searching, create indexes
    isSearching() && (await Quote.createIndexes());
    // create query based on user is searching or not
    const dbQuery = isSearching() ? { $text: { $search: req.query.s } } : {};
    // get results from db
    const results = await Quote.find(dbQuery);
    // send the array of results
    res.json(results);
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
    // get random result from db
    const results = await Quote.aggregate([{ $sample: { size: 1 } }]);
    // send the first (and only) result object
    res.json(results[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

module.exports = router;
