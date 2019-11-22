const { Router } = require('express');
const { sendAllUsers, sendUser, createUser, updateUser } = require('./controllers');

const router = Router();

router.get('/', sendAllUsers);
router.get('/:id', sendUser);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router;