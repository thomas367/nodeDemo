const express = require('express');
const connectDB = require('./config/dbConnection');

const app = express();

connectDB();

app.get('/', (res, req) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started'));
