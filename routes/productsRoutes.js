const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  createProducts,
} = require('../controllers/productsController');
router.route('/').post(createProducts);
router.route('/').get(getAllProducts);

module.exports = router;
