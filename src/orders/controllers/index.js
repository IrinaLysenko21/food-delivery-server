const ordersControllers = {
  sendAllOrders: require('./send_all_orders'),
  sendOneOrder: require('./send_one_order'),
  createOrder: require('./create_order'),
  updateOrder: require('./update_order'),
  deleteOrder: require('./delete_order')
};

module.exports = ordersControllers;