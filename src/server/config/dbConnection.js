const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        console.log('Mongo connected...');
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = connectDB;