const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../users/user_schema');
const { secret } = require('../../config');

const passwordMatches = (password1, hash) => bcrypt.compareSync(password1, hash);

const generateToken = paramsForTokenGeneration => {
  return jwt.sign(paramsForTokenGeneration, secret, {
    expiresIn: 60 * 60 * 24
  })
};

const authenticate = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    const id = user._id;

    const correctPassword = passwordMatches(password, user.password);

    if (!user || !correctPassword) {
      response.status(404).json({ status: "error", message: err.message });
      return;
    }

    const payload = { password, id };

    const token = generateToken(payload);

    response.status(200).json({ status: 'success', token: token });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = authenticate;