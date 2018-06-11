const db = require('./db');

const GeneralSchema = new db.Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    content: String
});

const General = db.model('General', GeneralSchema);

module.exports = General;