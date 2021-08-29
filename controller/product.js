const express = require('express');
const app = express();
const { Product } = require('../models');

app.use(express.json());

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, productInStock } = req.body;
        const image = req.file;
        const product = await Product.create({
            name,
            description,
            image: image.path,
            price,
            productInStock
        });
        res.status(201).json({ success: true, message: product });
    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json({ success: true, message: products });
    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image, price, productInStock } = req.body;
        const product = await Product.findOne({ where: { id } });
        if(product) {
            product.name = name;
            product.description = description;
            product.image = image;
            product.price = price;
            product.productInStock = productInStock;
            product.save();

            res.status(200).json({ success: true, message: product });
        }
        return res.status(201).json({ success: false, message: `Product with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ where: { id } });
        if(product) {
            product.destroy();
            res.status(204).json({ success: true, message: product });
        }
        return res.status(201).json({ success: false, message: `Product with id:${id} doesn't exist` });
    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}
