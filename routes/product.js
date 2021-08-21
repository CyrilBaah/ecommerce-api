const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/products`, productController.createProduct);
router.get(`${api}/products`, productController.getProducts);
router.put(`${api}/products/:id`, productController.updateProduct);
router.delete(`${api}/products/:id`, productController.deleteProduct);

module.exports = router