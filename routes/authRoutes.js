// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

// Registrasi pengguna baru
router.post('/auth/register', authController.registerUser);

// Login untuk mendapatkan token JWT
router.post('/auth/login', authController.loginUser);

module.exports = router;
