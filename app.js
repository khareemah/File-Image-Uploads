require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();
const productsRouter = require('./routes/productsRoutes');
const connectDB = require('./db/connect');
const fileUpload = require('express-fileupload');

app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload());
app.use('/api/v1/products', productsRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
