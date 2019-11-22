const ordersControllers = {
  sendAllOrders: require('./send_all_orders'),
  sendOneOrder: require('./send_one_order'),
  createOrder: require('./create_order')
};

module.exports = ordersControllers;