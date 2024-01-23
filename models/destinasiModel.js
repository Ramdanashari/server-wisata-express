// destinasiModel.js

const db = require('../db');

const Destinasi = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM destinasi');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM destinasi WHERE id_destinasi = ?', [id]);
    return rows[0];
  },

  create: async (nama_destinasi, deskripsi, lokasi) => {
  const [result] = await db.query('INSERT INTO destinasi (nama_destinasi, deskripsi, lokasi) VALUES (?, ?, ?)', [nama_destinasi, deskripsi, lokasi]);
  const [addedDestinasi] = await db.query('SELECT * FROM destinasi WHERE id_destinasi = ?', [result.insertId]);
  return addedDestinasi[0];
},

  updateById: async (id, nama_destinasi, deskripsi, lokasi) => {
    const [result] = await db.query('UPDATE destinasi SET nama_destinasi=?, deskripsi=?, lokasi=? WHERE id_destinasi=?', [nama_destinasi, deskripsi, lokasi, id]);
    return result.affectedRows > 0;
  },

  deleteById: async (id) => {
    const [result] = await db.query('DELETE FROM destinasi WHERE id_destinasi = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = Destinasi;
