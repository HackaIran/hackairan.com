const express = require('express');
const router = express.Router();

const ApiController = require('../server/Controllers/ApiController');

// Post get events

router.post('/getEvents', ApiController.getEvents);

module.exports = router;
