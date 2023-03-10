require('express-async-errors');
const express = require('express');
const app = express();
const productsRouter = require('./routes/productsRoutes');

app.use(express.json());
app.use('/api/v1/products', productsRouter);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server is listening on port ${port}`));
