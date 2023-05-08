const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})
module.exports = mongoose.model('productdetails', productschema)