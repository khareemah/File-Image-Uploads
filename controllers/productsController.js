const getAllProducts = async (req, res) => {
  res.send('get all products');
};

const createProducts = async (req, res) => {
  res.send('create products');
};

module.exports = { getAllProducts, createProducts };
