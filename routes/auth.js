const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/auth`, authController.signUp);



module.exports = router