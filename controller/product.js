const express = require('express');
const app = express();

app.use(express.json());

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, categoryId, productInStock } = req.body;
        
        res.status(201).json({ success: true, message: 'works' });

    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}

