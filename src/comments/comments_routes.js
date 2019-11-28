const { Router } = require('express');
const { createComment, getComments } = require('./controllers');

const router = Router();

router.get('/', (request, response) => {
  const requestQuery = Object.keys(request.query)[0];

  requestQuery === 'productId' && getComments(request, response);
});
router.post('/', createComment);

module.exports = router;