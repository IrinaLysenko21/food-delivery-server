const { Router } = require('express');
const { createComment, sendComments } = require('./controllers');

const router = Router();

router.get('/', (request, response) => {
  const requestQuery = Object.keys(request.query)[0];

  requestQuery === 'productId' && sendComments(request, response);
});
router.post('/', createComment);

module.exports = router;