const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require('../controllers/productController');
// get all the products
router.get('/', getAllProducts);

// get the product by id

router.get('/:id', getProductById);

module.exports = router;
