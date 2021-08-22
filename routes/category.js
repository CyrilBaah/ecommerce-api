const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/categories`, categoryController.createCategory);
router.get(`${api}/categories`, categoryController.getCategory);
router.put(`${api}/categories/:id`, categoryController.updateCategory);
router.delete(`${api}/categories/:id`, categoryController.deleteCategory);



module.exports = router