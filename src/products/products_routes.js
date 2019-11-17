const { Router } = require('express');
const { sendAllProducts, sendOneProduct, sendSeveralProducts, sendProductsByCategory } = require('./controllers')

const router = Router();

const regExpIds = /\/\?ids=[\d\D]*/;
const regExpCategory = /\/\?category=[\d\D]*/;

router.get('/', (request, response) => {
  request.url === '/' && sendAllProducts(request, response);
  request.url.match(regExpIds) && sendSeveralProducts(request, response);
  request.url.match(regExpCategory) && sendProductsByCategory(request, response);
});

router.get('/:id', sendOneProduct);

module.exports = router;