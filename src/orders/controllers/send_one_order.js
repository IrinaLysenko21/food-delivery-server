const Order = require('../order_schema');

const getOrder = async (request, response) => {
  try {
    const id = request.params.id;
    const order = await Order.findById(id);

    response.status(200).json({ status: 'success', order });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getOrder;
