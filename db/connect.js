const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.mongoose.connect(url);
};

module.exports = connectDB;
