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

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, color, productId } = req.body;
        const category = await Category.findOne({ where: { id } });
        if(category) {
            category.name = name;
            category.color = color;
            category.productId = productId;
            category.save();
            res.status(200).json({ success: true, message: category });
        }
        return res.status(201).json({ success: false, message: `Category with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: true, message: error });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findOne({ where: { id } });
        if(category) {
            category.destroy();
            res.status(204).json({ success: true, message: category });
        }
        return res.status(201).json({ success: false, message: `Category with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: true, message: error });
    }
}