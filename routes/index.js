const express = require('express');
const router = express.Router();

const HomeController = require('../server/Controllers/HomeController');

// Get main page

router.get('/', HomeController.showIndex);

// Get hacka parts

router.get('/:name', HomeController.showHackaPart);

module.exports = router;
