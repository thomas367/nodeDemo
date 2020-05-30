const express = require('express');
const connectDB = require('./config/dbConnection');
const routes = require('./routes/routes');
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api', routes);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started'));
