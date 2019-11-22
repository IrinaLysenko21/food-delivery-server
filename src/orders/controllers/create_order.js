const Order = require('../order_schema');
const User = require('../../users/user_schema');

const createOrder = async (request, response) => {
  try {
    const newOrder = new Order(request.body);
    const order = await newOrder.save();

    await User.findOneAndUpdate({ _id: order.creator }, { orders: order._id }, { new: true });

    response.status(201).json({ status: "success", order })
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = createOrder;
