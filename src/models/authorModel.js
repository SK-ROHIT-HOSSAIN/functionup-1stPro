const mongoose = require('mongoose');

//Author Schema

const authorSchema = new mongoose.Schema({
    author_id: {
        type: Number,
        required: true
    },

    author_name: {
        type: String,
        required: true
    },

    age: Number,
    address: String


}, { timestamps: true })

// exports

module.exports = mongoose.model('author', authorSchema) //authors