const { Router } = require('express');
const { authLogin, authCurrent } = require('./controllers');

const router = Router();

router.get('/current', authCurrent);
router.post('/login', authLogin);

module.exports = router;

