const express = require('express');
const router = express.Router();

const UserController = require('../server/Controllers/UserController');

// 

router.post('/register', UserController.register);

router.post('/login', UserController.login);

module.exports = router;
