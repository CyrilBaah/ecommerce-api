const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/categories`, categoryController.createCategory);
router.get(`${api}/categories`, categoryController.getCategory);


module.exports = router