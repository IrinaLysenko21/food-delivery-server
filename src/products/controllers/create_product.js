const Product = require('../product_schema');

const createProduct = async (request, response) => {
  try {
    const newProduct = new Product(request.body);
    const product = await newProduct.save();

    response.status(201).json({ status: "success", product });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = createProduct;
