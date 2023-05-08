const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 100
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'others']
    },
    isFreeAppUser: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('userdetails', userschema);