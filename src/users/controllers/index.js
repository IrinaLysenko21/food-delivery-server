const usersControllers = {
  sendAllUsers: require('./send_all_users'),
  sendUser: require('./send_one_user'),
  createUser: require('./create_user'),
  updateUser: require('./update_user')
};

module.exports = usersControllers;