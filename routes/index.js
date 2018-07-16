const express = require('express');
const router = express.Router();

const HomeController = require('../server/Controllers/HomeController');

// Get main page

router.get('/', HomeController.showIndex);

// Get hacka parts

router.get('/hackademy', (req, res)=>{
    res.render('subPage', {
        title: 'Hackademy',
        prefix: 'Hacka',
        suffix: 'demy'
    });
});

router.get('/hackateamup', (req, res)=>{
    res.render('subPage', {
        title: 'HackaTeamup',
        prefix: 'Hacka',
        suffix: 'Teamup'
    });
});

module.exports = router;
