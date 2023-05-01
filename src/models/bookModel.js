const mongoose = require('mongoose')

//Book Schema

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author_id: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    ratings: Number,
    isDeleted: Boolean
}, { tymestamps: true });

//export
module.exports = mongoose.model('book', bookSchema) //books