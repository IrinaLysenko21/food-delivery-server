const Product = require('../product_schema');

const deleteProduct = async (request, response) => {
  try {
    const id = request.params.id;

    const productToDelete = await Product.findById(id);
    await productToDelete.remove();

    response.status(200).json({ status: "success", deletedProduct: productToDelete });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = deleteProduct;