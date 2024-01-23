// fasilitasModel.js

const db = require('../db');

const Fasilitas = {
  getAllByDestinasiId: async (id_destinasi) => {
    const [rows] = await db.query('SELECT * FROM fasilitas WHERE id_destinasi = ?', [id_destinasi]);
    return rows;
  },

  create: async (id_destinasi, nama_fasilitas, ketersediaan) => {
    const [result] = await db.query(
      'INSERT INTO fasilitas (id_destinasi, nama_fasilitas, ketersediaan) VALUES (?, ?, ?)',
      [id_destinasi, nama_fasilitas, ketersediaan]
    );
  
    const [newFasilitas] = await db.query(
      'SELECT * FROM fasilitas WHERE id_fasilitas = ?',
      [result.insertId]
    );
  
    return newFasilitas[0];
  },
  

  updateById: async (id, nama_fasilitas, ketersediaan) => {
    const [result] = await db.query('UPDATE fasilitas SET nama_fasilitas=?, ketersediaan=? WHERE id_fasilitas=?', [nama_fasilitas, ketersediaan, id]);
    return result.affectedRows > 0;
  },

  deleteById: async (id) => {
    const [result] = await db.query('DELETE FROM fasilitas WHERE id_fasilitas = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = Fasilitas;
