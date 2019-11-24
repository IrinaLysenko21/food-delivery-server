const authControllers = {
  authLogin: require('./auth_login'),
  authCurrent: require('./auth_current'),
  authRegister: require('./auth_register')
};

module.exports = authControllers;