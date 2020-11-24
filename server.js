const express = require('express');
const parh = require('path');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

// serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// init middleware
app.use(express.json());

// define root route
app.get('/', (req, res) => res.send('API Running'));

// define quotes route
app.use('/api/quotes', require('./routes/api/quotes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
