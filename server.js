const express = require('express');
const connectDB = require('./config/dbConnection');
const routes = require('./routes/routes');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));
app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started'));
