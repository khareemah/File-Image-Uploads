const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require('../controllers/productsController');
const { uploadProductImageLocal } = require('../controllers/uploadController');

router.route('/').post(createProduct).get(getAllProducts);
router.route('/uploads').post(uploadProductImageLocal);

module.exports = router;
