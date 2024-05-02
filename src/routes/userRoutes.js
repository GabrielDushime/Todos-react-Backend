const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Routes
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.get('/:id', UserController.getUserById);
router.get('/', UserController.getAllUsers);
router.delete('/:id', UserController.deleteUserById)

module.exports = router;
