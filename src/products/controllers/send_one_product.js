const Product = require('../product_schema');
const Ingredient = require('../../ingredients/ingredients_schema');

const getProduct = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findById(id);

    response.status(200).json({ status: 'success', product });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getProduct;
