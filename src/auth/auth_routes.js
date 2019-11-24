const { Router } = require('express');
const { authLogin, authCurrent, authRegister } = require('./controllers');

const router = Router();

router.get('/current', authCurrent);
router.post('/login', authLogin);
router.post('/register', authRegister);

module.exports = router;

