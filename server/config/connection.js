require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || process.env.LOCAL_MONGO);

module.exports = mongoose.connection;
