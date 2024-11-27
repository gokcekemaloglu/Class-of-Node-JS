"use strict"
const { Schema } = require('mongoose')
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false,
}
/* ------------------------------------------------------- */
// Passenger Model:

const PassengerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female"], //????
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        trim: true,
        unique: [true, "This email has been already used"],
        validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Please fill a valid email address",
        ],
    },
    createdId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    collection: "passengers",
    timestamps: true
})

module.exports = mongoose.model("Passenger", PassengerSchema)
