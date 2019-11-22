const productsControllers = {
  sendAllProducts: require('./send_all_products'),
  sendOneProduct: require('./send_one_product'),
  sendSeveralProducts: require('./send_several_products'),
  sendProductsByCategory: require('./send_products_by_category'),
  updateProduct: require('./update_product')
};

module.exports = productsControllers;
