const productsRoute = require('./products/products_route');
const signUpRoute = require('./users/sign_up_route');
const mainRoute = require('./main/main_route');

const router = {
  '/products': productsRoute,
  '/signup': signUpRoute,
  default: mainRoute
};

module.exports = router;