const { Router } = require('express');
const {
  sendAllProducts,
  sendOneProduct,
  sendSeveralProducts,
  sendProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
} = require('./controllers');

const router = Router();

router.get('/', (request, response) => {
  const requestQuery = Object.keys(request.query)[0];

  request.url === '/' && sendAllProducts(request, response);
  requestQuery === 'ids' && sendSeveralProducts(request, response);
  requestQuery === 'category' && sendProductsByCategory(request, response);
});

router.get('/:id', sendOneProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
