const db = require('./db');

const GeneralSchema = db.Schema({
    address: {
        type: String,
        required: true,
        unique: true
    },
    content: String
});

const General = db.model('General', GeneralSchema);

module.exports = General;