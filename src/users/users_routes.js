const { Router } = require('express');
const { sendAllUsers, sendUser, createUser, updateUser, deleteUser } = require('./controllers');

const router = Router();

router.get('/', sendAllUsers);
router.get('/:id', sendUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;