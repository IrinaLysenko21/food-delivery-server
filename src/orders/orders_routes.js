const { Router } = require('express');
const { createOrder, sendOneOrder,sendAllOrders } = require('./controllers');

const router = Router();

router.get('/', sendAllOrders);
router.get('/:id', sendOneOrder);
router.post('/', createOrder);

module.exports = router;