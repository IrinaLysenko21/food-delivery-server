const { Router } = require('express');
const {
  getAllProducts,
  getOneProduct,
  getSeveralProducts,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
} = require('./controllers');

const router = Router();

router.get('/', (request, response) => {
  const requestQuery = Object.keys(request.query)[0];

  request.url === '/' && getAllProducts(request, response);
  requestQuery === 'ids' && getSeveralProducts(request, response);
  requestQuery === 'category' && getProductsByCategory(request, response);
});

router.get('/:id', getOneProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
