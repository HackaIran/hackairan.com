const Sponsor = require('../../model/Sponsor');

class ApiController {

    static async addSponsor(req, res, next) {

        const data = {
            name: req.body.name,
            link: req.body.link,
            logoLink: req.body.logoLink
        }

        let sponsor = new Sponsor(data);

        sponsor.save().then(() => {
            res.send({
                status: 1
            });
        }).catch((err) => {
            res.send({
                status: -1,
                err
            });
        })



    }

}

module.exports = ApiController;