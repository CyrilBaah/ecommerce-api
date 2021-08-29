const express = require('express');
const app = express();
const { Order } = require('../models');
app.use(express.json())

exports.createOrder = async (req, res) => {
    try {
        const { orderItems, shippingAddress, city, country, totalPrice, status, userId } = req.body;
        const order = await Order.create({
            orderItems,
            shippingAddress,
            city,
            country,
            totalPrice, 
            status,
            userId
        });
        res.status(201).json({ success: true, message: order });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: true, message: error });
    }    
}

exports.getOrder = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json({ success: true, message: orders });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: true, message: error });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findOne({ where: { id } });
        if(order) {
            order.destroy();
            res.status(204).json({ success: true, message: order });
        }
        return res.status(201).json({ success: false, message: `Order with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error });
    }
}
