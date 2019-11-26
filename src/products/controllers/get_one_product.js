const Product = require('../product_schema');

const getOneProduct = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findById(id);

    response.status(200).json({ status: 'success', product });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getOneProduct;
