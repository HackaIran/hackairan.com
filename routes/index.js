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
        suffix: 'demy',
        website: ''
    });
});

router.get('/hackateamup', (req, res)=>{
    res.render('subPage', {
        title: 'HackaTeamup',
        prefix: 'Hacka',
        suffix: 'Teamup',
        website: ''
    });
});

router.get('/nerdpitch', (req, res)=>{
    res.render('subPage', {
        title: 'nerdpitch',
        prefix: 'nerdpitch',
        suffix: '',
        website: 'https://nerdpitch.io/'
    });
});

router.get('/hope', (req, res)=>{
    res.render('subPage', {
        title: 'HOPE',
        prefix: 'HOPE',
        suffix: '',
        website: 'http://hope.hackairan.com/'
    });
});

module.exports = router;
