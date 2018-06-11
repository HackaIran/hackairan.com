const db = require('./db');

const TeamSchema = new db.Schema({
    fullName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    socials: new db.Schema({
        linkedIn: String,
        email: String,
        site: String,
        skype: String,
        twitter: String,
        dribble: String
    })

});

const Team = db.model('Team', TeamSchema);

module.exports = Team;