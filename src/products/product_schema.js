const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../helpers/timestamp');

// const subIngredientsList = new Schema({
//   type: {
//     type: String,
//     required: true
//   },
//   ref: {
//     type: String,
//     required: true
//   }
// },
// {
//   _id : false
// });

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
  ingredients: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
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
  categories: {
    type: Array,
    required: true
  },
  likes: {
    type: Number,
    required: true
  }
});

productSchema.plugin(timestamp);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
