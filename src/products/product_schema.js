const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  sku: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  creatorId: {
    type: Number,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  modified: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  likes: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;