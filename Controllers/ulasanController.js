// ulasanController.js

const Ulasan = require('../models/ulasanModel');

// Mendapatkan ulasan untuk destinasi tertentu
async function getUlasanByDestinasiId(req, res) {
  const { id_destinasi } = req.params;
  try {
    const ulasanList = await Ulasan.getAllByDestinasiId(id_destinasi);
    res.json(ulasanList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Menambah ulasan baru untuk destinasi
async function addUlasan(req, res) {
  const { id_destinasi, id_pengguna, nama_pengunjung, ulasan, rating } = req.body;
  try {
    const newUlasanId = await Ulasan.create(id_destinasi, id_pengguna, nama_pengunjung, ulasan, rating);
    res.status(201).json({ id_ulasan: newUlasanId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Mengupdate ulasan berdasarkan ID
async function updateUlasanById(req, res) {
  const { id } = req.params;
  const { ulasan, rating } = req.body;
  try {
    const success = await Ulasan.updateById(id, ulasan, rating);
    if (success) {
      res.json({ message: 'Ulasan updated successfully' });
    } else {
      res.status(404).json({ error: 'Ulasan not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Menghapus ulasan berdasarkan ID
async function deleteUlasanById(req, res) {
  const { id } = req.params;
  try {
    const success = await Ulasan.deleteById(id);
    if (success) {
      res.json({ message: 'Ulasan deleted successfully' });
    } else {
      res.status(404).json({ error: 'Ulasan not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAllUlasan(req, res) {
  try {
    const ulasanList = await Ulasan.getAll();
    res.json(ulasanList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getUlasanByUserId(req, res) {
  const { id_pengguna } = req.params;
  try {
    const ulasanList = await Ulasan.getByUserId(id_pengguna);
    res.json(ulasanList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getUlasanByDestinasiId,
  addUlasan,
  updateUlasanById,
  deleteUlasanById,
  getAllUlasan,
  getUlasanByUserId
};
