const jwt = require('jsonwebtoken');
const User = require('../../users/user_schema');

const getToken = request => request.body.token || request.query.token || request.headers['x-access-token'];

const authCurrent = async (request, response) => {
  try {
    const token = getToken(request);
    const userData = jwt.decode(token);

    const user = await User.findById(userData.id);

    response.status(200).json({ status: "success", user });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = authCurrent;