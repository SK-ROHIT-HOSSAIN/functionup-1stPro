const mongoose = require('mongoose');



const coustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"],
        trim: true,
        validate: {
            validator: function(value) {
                const nameRegex = /^[A-Za-z\s]+$/;
                return nameRegex.test(value);
            },
            message: 'Name should only contain alphabets and spaces.'
        }
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"],
        validate: {
            validator: function(value) {
                const nameRegex = /^[A-Za-z\s]+$/;
                return nameRegex.test(value);
            },
            message: 'Name should only contain alphabets and spaces.'
        }
    },
    mobileNumber: {
        type: String,
        required: [true, "mobileNumber is required"],
        maxLength: 10,
        minLength: 10
    },
    DOB: {
        type: Date,
        required: [true, "DOB is required"]
    },
    emailID: {
        type: String,
        required: [true, "emailID is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(value) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            },
            message: "{VALUE} is not a valid email"
        }
    },
    address: {
        type: String,
        required: [true, "address is required"]
    },
    customerID: {
        type: String,

        required: [true, "customerID is required"]
    },

    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        required: [true, "status is required"]
    },



}, { timestamps: true })

// exports

module.exports = mongoose.model('coustomer', coustomerSchema)