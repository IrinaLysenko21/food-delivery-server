const productsControllers = {
  sendAllProducts: require('./send_all_products'),
  sendOneProduct: require('./send_one_product'),
  sendSeveralProducts: require('./send_several_products'),
  sendProductsByCategory: require('./send_products_by_category'),
  createProduct: require('./create_product'),
  updateProduct: require('./update_product'),
  deleteProduct: require('./delete_product')
};

module.exports = productsControllers;
