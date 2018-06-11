const Team = require('../model/Team');
const Sponsor = require('../model/Sponsor');
const General = require('../model/General');
const HackaPart = require('../model/HackaPart');
const Gallery = require('../model/Gallery');

class HomeController {

    static async showIndex(req, res, next) {

        let teamMembers = await Team.find();

        let headerText = await General.findOne({
            address: 'hacka.main.header.text'
        });

        let sponsors = await Sponsor.find();

        let hackaparts = await HackaPart.find();

        res.render('index', {
            teamMembers,
            headerText,
            sponsors,
            hackaparts
        });

    }

    static async showHackaPart(req, res, next) {

        let name = req.params.name;

        let hackapart = await HackaPart.findOne({
            address: name
        });

        let gallery = await Gallery.findOne({}, null, {
            sort: {
                '_id': -1
            }
        })

        console.log(JSON.stringify(gallery))

        if (hackapart) {
            res.render('part', {
                part: hackapart,
                gallery
            });
        } else {
            res.sendStatus(404);
        }

    }

}

module.exports = HomeController;