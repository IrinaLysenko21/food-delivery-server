const User = require('../user_schema');

const createUser = async (request, response) => {
  try {
    const newUser = new User(request.body);
    const user = await newUser.save();

    response.status(201).json({ status: "success", user })
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = createUser;
