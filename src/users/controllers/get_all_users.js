const User = require('../user_schema');

const getAllUsers = async (request, response) => {
  try {
    const users = await User.find();

    response.status(200).json({status: "success", users});
  } catch (err) {
    response.status(400).json({status: "error", message: err.message});
  }
};

module.exports = getAllUsers;