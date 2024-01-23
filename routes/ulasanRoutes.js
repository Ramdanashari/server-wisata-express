// ulasanRoutes.js

const express = require('express');
const router = express.Router();
const ulasanController = require('../controllers/ulasanController');

// Mendapatkan ulasan untuk destinasi tertentu
router.get('/ulasan/:id_destinasi', ulasanController.getUlasanByDestinasiId);

// Menambah ulasan baru untuk destinasi
router.post('/ulasan', ulasanController.addUlasan);

// Mengupdate ulasan berdasarkan ID
router.put('/ulasan/:id', ulasanController.updateUlasanById);

// Menghapus ulasan berdasarkan ID
router.delete('/ulasan/:id', ulasanController.deleteUlasanById);

// ulasanRoutes.js
router.get('/ulasan', ulasanController.getAllUlasan);

// ulasanRoutes.js
router.get('/ulasan/user/:id_pengguna', ulasanController.getUlasanByUserId);


module.exports = router;
