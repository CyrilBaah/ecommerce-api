const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/products`, productController.createProduct);


module.exports = router