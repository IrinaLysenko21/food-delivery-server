const User = require('../product_schema');

const updateProduct = async (request, response) => {
  try {
    const id = request.params.id;
    const newParam = request.body;

    const updatedProduct = await User.findOneAndUpdate({ _id: id }, newParam, { new: true });
    response.status(200).json({ status: 'success', updatedProduct });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = updateProduct;