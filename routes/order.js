const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/orders`, orderController.createOrder);
router.get(`${api}/orders`, orderController.getOrder);
router.delete(`${api}/orders/:id`, orderController.deleteOrder);



module.exports = router