const productsControllers = {
  getAllProducts: require('./get_all_products'),
  getOneProduct: require('./get_one_product'),
  getSeveralProducts: require('./get_several_products'),
  getProductsByCategory: require('./get_products_by_category'),
  createProduct: require('./create_product'),
  updateProduct: require('./update_product'),
  deleteProduct: require('./delete_product')
};

module.exports = productsControllers;
