// fasilitasController.js

const Fasilitas = require('../models/fasilitasModel');

// Mendapatkan daftar fasilitas untuk destinasi tertentu
async function getFasilitasByDestinasiId(req, res) {
  const { id_destinasi } = req.params;
  try {
    const fasilitasList = await Fasilitas.getAllByDestinasiId(id_destinasi);
    res.json(fasilitasList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Menambah fasilitas baru untuk destinasi
async function addFasilitas(req, res) {
  const { id_destinasi, nama_fasilitas, ketersediaan } = req.body;
  try {
    const newFasilitas = await Fasilitas.create(id_destinasi, nama_fasilitas, ketersediaan);
    res.status(201).json(newFasilitas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Mengupdate informasi fasilitas berdasarkan ID
async function updateFasilitasById(req, res) {
  const { id } = req.params;
  const { nama_fasilitas, ketersediaan } = req.body;
  try {
    const success = await Fasilitas.updateById(id, nama_fasilitas, ketersediaan);
    if (success) {
      res.json({ message: 'Fasilitas updated successfully' });
    } else {
      res.status(404).json({ error: 'Fasilitas not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Menghapus fasilitas berdasarkan ID
async function deleteFasilitasById(req, res) {
  const { id } = req.params;
  try {
    const success = await Fasilitas.deleteById(id);
    if (success) {
      res.json({ message: 'Fasilitas deleted successfully' });
    } else {
      res.status(404).json({ error: 'Fasilitas not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getFasilitasByDestinasiId,
  addFasilitas,
  updateFasilitasById,
  deleteFasilitasById,
};
