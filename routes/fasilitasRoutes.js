// fasilitasRoutes.js

const express = require('express');
const router = express.Router();
const fasilitasController = require('../controllers/fasilitasController');

// Mendapatkan daftar fasilitas untuk destinasi tertentu
router.get('/fasilitas/:id_destinasi', fasilitasController.getFasilitasByDestinasiId);

// Menambah fasilitas baru untuk destinasi
router.post('/fasilitas', fasilitasController.addFasilitas);

// Mengupdate informasi fasilitas berdasarkan ID
router.put('/fasilitas/:id', fasilitasController.updateFasilitasById);

// Menghapus fasilitas berdasarkan ID
router.delete('/fasilitas/:id', fasilitasController.deleteFasilitasById);

module.exports = router;
