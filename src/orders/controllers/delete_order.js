const Order = require('../order_schema');

const deleteOrder = async (request, response) => {
  try {
    const id = request.params.id;

    const orderToDelete = await Order.findById(id);
    await orderToDelete.remove();

    response.status(200).json({ status: "success", deletedOrder: orderToDelete });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = deleteOrder;