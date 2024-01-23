// destinasiController.js

const Destinasi = require('../models/destinasiModel');

async function getAllDestinasi(req, res) {
  try {
    const destinasiList = await Destinasi.getAll();
    res.json(destinasiList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getDestinasiById(req, res) {
  const { id } = req.params;
  try {
    const destinasi = await Destinasi.getById(id);
    if (destinasi) {
      res.json(destinasi);
    } else {
      res.status(404).json({ error: 'Destinasi not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function addDestinasi(req, res) {
  const { nama_destinasi, deskripsi, lokasi } = req.body;
  try {
    const newDestinasi = await Destinasi.create(nama_destinasi, deskripsi, lokasi);
    res.status(201).json(newDestinasi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateDestinasiById(req, res) {
  const { id } = req.params;
  const { nama_destinasi, deskripsi, lokasi } = req.body;
  try {
    const success = await Destinasi.updateById(id, nama_destinasi, deskripsi, lokasi);
    if (success) {
      res.json({ message: 'Destinasi updated successfully' });
    } else {
      res.status(404).json({ error: 'Destinasi not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteDestinasiById(req, res) {
  const { id } = req.params;
  try {
    const success = await Destinasi.deleteById(id);
    if (success) {
      res.json({ message: 'Destinasi deleted successfully' });
    } else {
      res.status(404).json({ error: 'Destinasi not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllDestinasi,
  getDestinasiById,
  addDestinasi,
  updateDestinasiById,
  deleteDestinasiById,
};
