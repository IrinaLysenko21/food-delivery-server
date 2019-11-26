const { Router } = require('express');
const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('./controllers');

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;