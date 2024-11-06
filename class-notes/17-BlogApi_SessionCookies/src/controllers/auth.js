"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const User = require("../models/user")
const passwordEncrypt = require('../helpers/passwordEncrypt');

module.exports = {
    login: async(req, res) => {
        const {email, password} = req.body
        if (email && password) { // checking emial and password

            const user = await User.findOne({email: email})

            if (user) { // if user exist with this email
                if (user.password === passwordEncrypt(password)) { // check if password is matching
                    // req.session
                    res.status(202).send({
                        error: false,
                        msg: "Login success",
                        user,
                        // password: passwordEncrypt(password)
                    })
                }else {
                    res.errorStatusCode = 401
                    throw new Error("Wrong password!User Credentials are wrong!")
                }                
            } else {
                res.errorStatusCode = 401
                throw new Error("User  is not found")
            }
            res.status(202).send({
                error: false,
                user
            })
        } else {
            res.errorStatusCode = 401
            throw new Error("Email and password Required")
        }
    },
    logout: async(req, res) => {
        req.session = null
        res.status(200).send({
            error: false,
            msg: "logout Success!"
        })
    },
}

