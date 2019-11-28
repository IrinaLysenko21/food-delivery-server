const Product = require('../product_schema');

const getProducts = async (request, response) => {
  try {
    const categoryStr = Object.values(request.query)[0];
    const category = categoryStr.slice(1, categoryStr.length - 1);
    const products = await Product.find({ categories: { $in: category } }).populate('ingredients');

    response.status(200).json({ status: 'success', products });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getProducts;
