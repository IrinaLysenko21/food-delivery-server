const Order = require('../order_schema');

const updateOrder = async (request, response) => {
  try {
    const id = request.params.id;
    const newParam = request.body;

    const updatedOrder = await Order.findOneAndUpdate({ _id: id }, newParam, { new: true });

    response.status(200).json({ status: 'success', updatedOrder });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = updateOrder;