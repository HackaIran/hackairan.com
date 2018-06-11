const db = require('./db');

const HackaPartSchema = db.Schema({
    address:{
        type: String,
        required: true,
        unique: true
    },
    name: String,
    imageAddress: String,
    description: String,
    shortDescription: String,
    headerImage: String,
    keywords: String
});

const HackaPart = db.model('HackaPart', HackaPartSchema);

module.exports = HackaPart;