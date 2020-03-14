const express = require('express');
const connectDB = require('./config/dbConnection');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('API running'));

//Access user route
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started'));
