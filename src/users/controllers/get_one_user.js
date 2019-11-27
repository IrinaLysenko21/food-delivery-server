const User = require('../user_schema');

const getOneUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = await User.findById(id);

    response.status(200).json({ status: 'success', user });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = getOneUser;