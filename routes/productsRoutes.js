const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  createProduct,
} = require('../controllers/productsController');
const { uploadProductImage } = require('../controllers/uploadController');

router.route('/').post(createProduct).get(getAllProducts);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
