const ordersControllers = {
  getAllOrders: require('./get_all_orders'),
  getOneOrder: require('./get_one_order'),
  createOrder: require('./create_order'),
  updateOrder: require('./update_order'),
  deleteOrder: require('./delete_order')
};

module.exports = ordersControllers;