const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../helpers/timestamp');
require('mongoose-type-email');

const userSchema = new Schema({
  username:  {
    type: String,
    required: true
  },
  telephone:  {
    type: String,
    required: true
  },
  password:  {
    type: String,
    required: true,
  },
  email:  {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  favoriteProducts: {
    type: Array,
    required: true
  },
  viewedProducts: {
    type: Array,
    required: true
  },
  orders: {
    type: Array,
    required: true
  }
});

userSchema.plugin(timestamp);

const User = mongoose.model('User', userSchema);

module.exports = User;
