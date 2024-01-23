// destinasiRoutes.js

const express = require('express');
const router = express.Router();
const destinasiController = require('../controllers/destinasiController');

// Mendapatkan daftar semua destinasi
router.get('/destinasi', destinasiController.getAllDestinasi);

// Mendapatkan detail destinasi berdasarkan ID
router.get('/destinasi/:id', destinasiController.getDestinasiById);

// Menambah destinasi baru
router.post('/destinasi', destinasiController.addDestinasi);

// Mengupdate destinasi berdasarkan ID
router.put('/destinasi/:id', destinasiController.updateDestinasiById);

// Menghapus destinasi berdasarkan ID
router.delete('/destinasi/:id', destinasiController.deleteDestinasiById);

module.exports = router;
