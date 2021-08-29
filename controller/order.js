const express = require('express');
const app = express();
const { Order } = require('../models');
app.use(express.json())

exports.createOrder = async (req, res) => {
    try {
        const { orderItems, shippingAddress, city, country, totalPrice, userId } = req.body;
        const order = await Order.create({
            orderItems,
            shippingAddress,
            city,
            country,
            totalPrice, 
            userId
        });
        res.status(201).json({ success: true, message: order });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: true, message: error });
    }    
}
