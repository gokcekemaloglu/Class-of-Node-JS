"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Firm Model:

const FirmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    }
}, {
    collection: "firms",
    timestamps: true
})

module.exports = mongoose.model("Firm", FirmSchema)