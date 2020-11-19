const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json());

// define root route
app.get('/', (req, res) => res.send('API Running'));

// define quotes route
app.use('/api/quotes', require('./routes/api/quotes'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
