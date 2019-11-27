const User = require('../user_schema');

const deleteUser = async (request, response) => {
  try {
    const id = request.params.id;

    const userToDelete = await User.findById(id);
    await userToDelete.remove();

    response.status(200).json({ status: "success", deletedUser: userToDelete });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = deleteUser;