const db = require('./db');

const GallerySchema = new db.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: db.Schema.ObjectId,
        ref: 'HackaPart'
    },
    images: [String]
});

const Gallery = db.model('Gallery', GallerySchema);

module.exports = Gallery;