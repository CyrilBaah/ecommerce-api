const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/orders`, orderController.createOrder);
router.get(`${api}/orders`, orderController.getOrder);


module.exports = router