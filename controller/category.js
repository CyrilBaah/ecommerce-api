const express = require('express');
const app = express();
const { Category } = require('../models');
app.use(express.json())

exports.createCategory = async (req, res) => {
    try {
        const { name, color, productId } = req.body;
        const category = await Category.create({
            name,
            color,
            productId
        });
        res.status(201).json({ success: true, message: category });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: true, message: error });
    }    
}

exports.getCategory = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({ success: true, message: categories });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: true, message: error });
    }
}