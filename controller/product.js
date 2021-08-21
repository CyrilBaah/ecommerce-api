const express = require('express');
const app = express();
const { Product } = require('../models');

app.use(express.json());

exports.createProduct = async (req, res) => {
    try {
        const { name, description, image, price, productInStock } = req.body;
        const product = await Product.create({
            name,
            description,
            image,
            price,
            productInStock
        });
        res.status(201).json({ success: true, message: product });

    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}

