const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    headQuarter: String,
    isHardCover: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('newPublisher', publisherSchema);