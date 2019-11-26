const Product = require('../product_schema');

const getProducts = async (request, response) => {
  try {
    const idsStr = Object.values(request.query)[0];
    const ids = idsStr.slice(1, idsStr.length - 1).split(',');
    const products = await Product.find({ _id: { $in: ids } });

    response.status(200).json({ status: 'success', products });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getProducts;

