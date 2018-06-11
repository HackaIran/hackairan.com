const Team = require('../model/Team');
const Sponsor = require('../model/Sponsor');
const General = require('../model/General');
const HackaPart = require('../model/HackaPart');

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

        if(hackapart){
            res.render('part', {part: hackapart});
        }else{
            res.sendStatus(404);
        }

    }

}

module.exports = HomeController;