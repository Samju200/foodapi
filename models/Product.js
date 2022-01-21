const monogose = require('mongoose');

const productSchema = new monogose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Product = monogose.model('Product', productSchema);
module.exports = Product;
