const url = require('url');
const sendProduct = require('./send_one_product');
const sendProducts = require('./send_several_products')
const sendAllProducts = require('./send_all_products');
const sendProductsByCategory = require('./send_products_by_category');

const handleProductsRoute = (request, response) => {

  if (request.method === 'GET') {
    const parsedUrl = url.parse(request.url);
    const path = parsedUrl.path;

    const regExpId = /products\/\d/;
    const regExpIds = /products\/\?ids=[\d\D]/;
    const regExpCategory = /products\/\?category=[\d\D]/;

    path === '/products' && sendAllProducts(request, response);
    path.match(regExpId) && sendProduct(request, response);
    path.match(regExpIds) && sendProducts(request, response);
    path.match(regExpCategory) && sendProductsByCategory(request, response);

    return;
  }
};

module.exports = handleProductsRoute;