'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const {Schema, model} = require("mongoose")
const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    userName: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    firstName: String,
    lastName: String,
},{
    collection:"user",
    timestamps: true
})

module.exports = model("User", UserSchema)