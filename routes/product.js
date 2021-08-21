const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/products`, productController.createProduct);
router.get(`${api}/products`, productController.getProducts);


module.exports = router