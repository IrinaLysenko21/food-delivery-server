const url = require('url');
const sendProduct = require('./send_one_product');
const sendProducts = require('./send_several_products')
const sendAllProducts = require('./send_all_products');
const sendProductsByCategory = require('./send_products_by_category');

const handleProductsRoute = (request, response) => {

  if (request.method === 'GET') {
    const parsedUrl = url.parse(request.url);
    const path = parsedUrl.path;

    const regExp_1 = /products\/\d/;
    const regExp_2 = /products\/\?ids=[\d\D]/;
    const regExp_3 = /products\/\?category=[\d\D]/;

    path === '/products' ? sendAllProducts(request, response) : null;
    path.match(regExp_1) ? sendProduct(request, response) : null;
    path.match(regExp_2) ? sendProducts(request, response) : null;
    path.match(regExp_3) ? sendProductsByCategory(request, response) : null;

    return;
  }
};

module.exports = handleProductsRoute;