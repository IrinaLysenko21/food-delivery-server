const { Router } = require('express');
const { getAllOrders, getOneOrder, createOrder, updateOrder, deleteOrder } = require('./controllers');

const router = Router();

router.get('/', getAllOrders);
router.get('/:id', getOneOrder);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;