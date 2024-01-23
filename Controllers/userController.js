const User = require('../models/userModel');

async function getUsersAll(req, res) {
  try {
    const userList = await User.getAll();
    res.json(userList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.getById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateUserById(req, res) {
  const { id } = req.params;
  const updatedUserData = req.body;
  try {
    console.log('ID:', id);
    console.log('Updated User Data:', updatedUserData);

    const success = await User.updateUserById(id, updatedUserData);
    console.log('Update Success:', success);

    if (success) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function deleteUserById(req, res) {
  const { id } = req.params;
  try {
    const success = await User.deleteUserById(id);
    if (success) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getUsersAll,
  getUserById,
  updateUserById,
  deleteUserById,
};
