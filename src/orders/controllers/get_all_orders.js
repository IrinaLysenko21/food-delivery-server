const Order = require('../order_schema');

const getAllOrders = async (request, response) => {
  try {
    const orders = await Order.find();

    response.status(200).json({ status: "success", orders });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getAllOrders;