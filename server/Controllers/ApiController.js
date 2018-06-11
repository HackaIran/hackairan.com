const Event = require('../model/Event');

const moment = require('moment');

class ApiController {

    static async getEvents(req, res, next) {

        let today = moment().startOf('day');

        let from = today.clone().add(-2, 'month');

        let to = today.clone().add(2, 'month');

        console.log(today.toDate(), from.toDate(), to.toDate())

        let properEvents = await Event.find({
            'time': {
                $gte: from.toDate(),
                $lt: to.toDate()
            }
        });


        res.send({
            events: properEvents
        });

    }

}

module.exports = ApiController;