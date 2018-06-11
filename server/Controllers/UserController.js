const User = require('../model/User');

const passport = require('passport');

class UserController {

    static register(req, res, next) {

        const data = {
            name: req.body.name,
            lastName: req.body.lastname,
            email: req.body.email,
            username: req.body.username
        }

        User.register(new User(data), req.body.password, function (err, user) {
            if (err) {
                return res.send({
                    status: -1,
                    err
                });
            }

            passport.authenticate('local')(req, res, function () {
                res.send({
                    status: 1
                });
            });
        });


    }

    static login(req, res, next){
        passport.authenticate('local')(req, res, function () {
            res.send({
                status: 1
            });
        });
    }

}

module.exports = UserController;