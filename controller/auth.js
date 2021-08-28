const express = require('express');
const app = express();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.json());

exports.signUp = async (req, res) => {
   try {
    const { username, email, password, confirmPassword, city, phone, country, isAdmin } = req.body;
    if (!(username && email && password )) {
        res.status(400).json({ success: false, message: "These fields are required." });
        res.exit(0);
    }
    if (password !== confirmPassword) {
        res.status(400).json({ success: false, message: `Password doesn't match.` });
        res.exit(0);
    }
    const user = await User.findOne({ where: { email } });
    if (user) {
        res.status(400).json({ success: false, message: `User already exist` });
    } else {
        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: encryptedPassword,
            city,
            phone,
            country,
            isAdmin
        });
        res.status(201).json({ success:true, message: user });
    }
   } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
   }
}

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).json({ success:false, message: "All fields are required" });
        }
        const user = await User.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({
                userId: user.id, email
            }, process.env.TOKEN_KEY, { expiresIn: "2h" });
            res.status(200).json({ success: true, user: user, token })
        }
        res.status(400).json({ success: false, message: "Invalid Credentials" });
    } catch (error) {
        console.log(error);
        res.status(201).json({ success: false, message: error });
    }
}
