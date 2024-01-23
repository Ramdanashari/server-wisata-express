const AuthModel = require('../models/authModel');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const registrationResult = await AuthModel.registerUser(username, email, password);
    res.json({ message: registrationResult.message, userId: registrationResult.userId });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(400).json({ error: error.message });
  }
};



const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await AuthModel.loginUser(email, password);
    res.json(result);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
