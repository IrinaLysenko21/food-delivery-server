const User = require('../user_schema');

const updateUser = async (request, response) => {
  try {
    const id = request.params.id;
    const newParam = request.body;
    const updatedUser = await User.findOneAndUpdate({ _id: id }, newParam, { new: true });

    response.status(200).json({ status: 'success', updatedUser });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = updateUser;