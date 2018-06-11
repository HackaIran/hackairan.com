const db = require('./db');

const SponsorSchema = new db.Schema({
    name: String,
    link: String,
    logoLink: String
});

const Sponsor = db.model('Sponsor', SponsorSchema);

module.exports = Sponsor;