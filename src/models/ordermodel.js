const mongoose = require("mongoose")

const orderschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userdetails"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productdetails"
    },
    amount: {
        type: Number,
        required: true
    },
    isFreeAppUser: {
        type: Boolean,

    },
    date: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('orderdetails', orderschema)