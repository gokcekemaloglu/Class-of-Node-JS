'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const {Schema, model} = require("mongoose")
/* ------------------------------------------------------- */

const crypto = require("node:crypto")

// parameters

const keyCode = "21yuifhsdkjfgisafisadhfsgawfhssvsfifashfysagfjsdga" // secretKey for enc
const loopCount = 10_000 // number of loops
const charCount = 32 // write 32 for 64
const encType = "sha512" // Type of algorithm

/* ------------------------------------------------------- */

const passwordEncrypte = (password) => {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString("hex")
} 


const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "e-mail is required"],
        // validate: (email) => {
        //     if (email.includes("@") && email.includes(".")) {
        //         return true
        //     } else {
        //         return false
        //     }            
        // }
        // validate: (email) => (email.includes("@") && email.includes("."))
        validate: [
            (email) => (email.includes("@") && email.includes(".")),
            "e-mail type is incorrect"
        ]
    },
    password: {
        type: String,
        trim: true,
        required: true,
        /* ------------------------------------------------------- */
        // set: (password) => {
        //     return "customPassword"
        // }
        // validate: (password) => {
        //     if (password.length < 5) return false
        //     else true
        // },
        /* ------------------------------------------------------- */

        // set: (password) => {
        //     return passwordEncrypte(password)
        // },
        // set: (password) => passwordEncrypte(password), // set runs befor validate
        // validate: (password) => {
        //     if (password.length < 5) return false
        //     else true
        // },
        /* ------------------------------------------------------- */

        // set: (password) => { // set runs befor validate
        //     if (password.length < 5) {
        //         // throw new Error("Invalid Password!") // Syntax Error
        //         return "InvalidPassword"
        //     } else {
        //         return passwordEncrypte(password)
        //     }
        // },
        // validate: (password) => {
        //     if (password === "InvalidPassword") {
        //         return false
        //     } else {
        //         return true
        //     }
        // }
        /* ------------------------------------------------------- */

        set: (password) => (password.length >= 5 ? passwordEncrypte(password) : "InvalidPassword"),
        validate: (password) => password != "InvalidPassword"
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
    collection:"users",
    timestamps: true
})

module.exports = model("User", UserSchema)