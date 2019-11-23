const { Router } = require('express');
const { createOrder, sendOneOrder, sendAllOrders, updateOrder, deleteOrder } = require('./controllers');

const router = Router();

router.get('/', sendAllOrders);
router.get('/:id', sendOneOrder);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;