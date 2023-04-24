const path = require('path');
const fs = require('fs');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const cloudinary = require('cloudinary').v2;

const uploadProductImageLocal = async (req, res) => {
  // check if file exist
  if (!req.files) {
    throw new BadRequestError('No file uploaded');
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

const uploadProductImage = async (req, res) => {
  // console.log(req.files.image);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-uploads',
    }
  );
  // console.log(result);
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};
module.exports = { uploadProductImage };
