const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthModel = {
  registerUser: async (username, email, password) => {
    try {
      // Check if email is already used
      const [existingUser] = await db.query('SELECT * FROM pengguna WHERE email = ?', [email]);

      if (existingUser.length > 0) {
        throw new Error('Email sudah terpakai. Gunakan email lain.');
      }

      // If email is not used, proceed with registration
      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await db.query('INSERT INTO pengguna (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

      const userId = result.insertId;
      const successMessage = 'Pengguna berhasil terdaftar';

      return { userId, message: successMessage };
    } catch (error) {
      console.error('Error during user registration:', error);
      throw error;
    }
  },


  loginUser: async (email, password) => {
    try {
      const [results] = await db.query('SELECT * FROM pengguna WHERE email = ?', [email]);
      if (results.length > 0) {
        const user = results[0];

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          const token = jwt.sign({ email: user.email }, 'mysecretjwtkey', { expiresIn: '7d' });
          return { token };
        } else {
          throw new Error('Kombinasi email dan kata sandi tidak valid');
        }
      } else {
        throw new Error('Kombinasi email dan kata sandi tidak valid');
      }
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  // ... (mungkin ada operasi lainnya sesuai kebutuhan)

};

module.exports = AuthModel;
