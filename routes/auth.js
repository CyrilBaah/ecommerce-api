const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const api = process.env.API_URL;
require('dotenv').config();


router.post(`${api}/signup`, authController.signUp);
router.post(`${api}/login`, authController.Login);



module.exports = router