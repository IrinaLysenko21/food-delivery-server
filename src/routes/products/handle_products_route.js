const sendProduct = require('./send_product');
const sendAllProducts = require('./send_all_products');

const handleProductsRoute = (request, response) => {
  console.log(request.url);

  if (request.method === 'GET') {
    const url = request.url;
    const lastIndex = url.lastIndexOf('/');
    const idString = url.slice(lastIndex + 1).trim();
    const id = Number(idString);
    let urlToCheck = '';
    typeof id === 'number' ? urlToCheck = '/products' + '/' + idString : null;

    request.url === '/products' ? sendAllProducts(request, response) : null;
    request.url === urlToCheck ? sendProduct(request, response) : null;
    return;
  }
};

module.exports = handleProductsRoute;