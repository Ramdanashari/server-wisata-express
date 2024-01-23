// ulasanModel.js

const db = require('../db');

const Ulasan = {
  getAllByDestinasiId: async (id_destinasi) => {
    const [rows] = await db.query('SELECT * FROM ulasan WHERE id_destinasi = ?', [id_destinasi]);
    return rows;
  },

  create: async (id_destinasi, id_pengguna, nama_pengunjung, ulasan, rating) => {
    const [penggunaRows] = await db.query('SELECT * FROM pengguna WHERE id_pengguna = ?', [id_pengguna]);
    
    if (penggunaRows.length === 0) {
      throw new Error('Invalid id_pengguna. User not found.');
    }

    const [result] = await db.query('INSERT INTO ulasan (id_destinasi, id_pengguna, nama_pengunjung, ulasan, rating) VALUES (?, ?, ?, ?, ?)', [id_destinasi, id_pengguna, nama_pengunjung, ulasan, rating]);
    return result.insertId;
  },

  updateById: async (id, ulasan, rating) => {
    const [result] = await db.query('UPDATE ulasan SET ulasan=?, rating=? WHERE id_ulasan=?', [ulasan, rating, id]);
    return result.affectedRows > 0;
  },

  deleteById: async (id) => {
    const [result] = await db.query('DELETE FROM ulasan WHERE id_ulasan = ?', [id]);
    return result.affectedRows > 0;
  },
  
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM ulasan');
    return rows;
  },

  getByUserId: async (id_pengguna) => {
    const [rows] = await db.query('SELECT * FROM ulasan WHERE id_pengguna = ?', [id_pengguna]);
    return rows;
  },
  
};



module.exports = Ulasan;
