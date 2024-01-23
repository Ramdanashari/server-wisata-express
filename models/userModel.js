const db = require('../db');

const User = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM pengguna');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM pengguna WHERE id_pengguna = ?', [id]);
    return rows[0];
  },

  updateUserById: async (id, updatedUserData) => {
    const { username, email, password } = updatedUserData;
    const [result] = await db.query('UPDATE pengguna SET username=?, email=?, password=? WHERE id_pengguna=?', [username, email, password, id]);
    return result.affectedRows > 0;
  },

  deleteUserById: async (id) => {
    const [result] = await db.query('DELETE FROM pengguna WHERE id_pengguna = ?', [id]);
    return result.affectedRows > 0;
  },
};

module.exports = User;
