// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/user', userController.getUsersAll);

router.get('/user/:id', userController.getUserById);

// userRoutes.js
router.put('/user/:id', userController.updateUserById);

// userRoutes.js
router.delete('/user/:id', userController.deleteUserById);


module.exports = router;
