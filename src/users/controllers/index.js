const usersControllers = {
  getAllUsers: require('./get_all_users'),
  getOneUser: require('./get_one_user'),
  createUser: require('./create_user'),
  updateUser: require('./update_user'),
  deleteUser: require('./delete_user')
};

module.exports = usersControllers;