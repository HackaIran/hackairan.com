const db = require('./db');

const EventSchema = db.Schema({
    title: {
        type: String,
        required: true
    },
    shortDescription: String,
    description: String,
    registerLink: String,
    location: String,
    time: {
        type: Date,
        default: Date.now(),
        required: true
    },
    to: String,
    from: String,
    type: {
        type: db.Schema.ObjectId,
        ref: 'HackaPart'
    }
});

const Event = db.model('Event', EventSchema);

module.exports = Event;