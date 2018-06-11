const express = require('express');
const router = express.Router();

const Auth = require('../../server/Middlewares/Auth');

const ApiController = require('../../server/Controllers/panel/ApiController');

router.use(Auth.mustBeLoggedIn);

router.post('/addSponsor', ApiController.addSponsor);

module.exports = router;
