const path = require('path');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const uploadProductImageLocal = async (req, res) => {
  // check if file exist
  if (!req.files) {
    throw new customError.BadRequestError('No file uploaded');
  }
  const productImage = req.files.image;
  // check file type

  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('Please upload an image');
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new BadRequestError(`Please upload image smaller than 1KB`);
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + productImage.name
  );
  await productImage.mv(imagePath);

  res
    .status(StatusCodes.OK)
    .send({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadProductImageLocal };
