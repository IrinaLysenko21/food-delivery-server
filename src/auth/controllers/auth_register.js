const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../users/user_schema');
const { secret, tokenLifetime } = require('../../config');

const generateToken = paramsForTokenGeneration => {
  return jwt.sign(paramsForTokenGeneration, secret, {
    expiresIn: tokenLifetime
  })
};

const authRegister = async (request, response) => {
  try {
    const user = request.body;
    const { password, email } = user;
    const emailMatch = await User.findOne({ email });

    if (emailMatch) {
      return response.status(404).json({ status: "error", message: "User already exists" });
    }

    const hashedPassword =  bcrypt.hashSync(password, 10);
    const userData = { ...user, password: hashedPassword };

    const newUser = new User(userData);
    const userToSave = await newUser.save();

    const savedUser = await User.findOne({ email: userToSave.email });
    const id = savedUser._id;

    const payload = { password, id };

    const token = generateToken(payload);

    response.status(201).json({ status: "success", token, user: savedUser });
  } catch (err) {
    response.status(404).json({ status: "error", message: err.message });
  }
};

module.exports = authRegister;