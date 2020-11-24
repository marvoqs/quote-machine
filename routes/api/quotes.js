const express = require('express');
const router = express.Router();

const Quote = require('../../models/Quote');

const itemsPerPage = 10;

// @route   GET api/quotes
// @desc    Get all quotes
// @access  Public
router.get('/', async (req, res) => {
  const { query, page } = req.query;
  // define skip value based on current page and itemsPerPage
  const dbSkip = page * itemsPerPage;
  // user is searching checker
  const isSearching = () => query !== undefined && query !== '';

  try {
    // if user is searching, create indexes
    isSearching() && (await Quote.createIndexes());
    // create query based on user is searching or not
    const dbQuery = isSearching() ? { $text: { $search: query } } : {};
    // get results from db
    const results = await Quote.find(dbQuery).skip(dbSkip).limit(itemsPerPage);
    // send the array of results
    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

module.exports = router;
