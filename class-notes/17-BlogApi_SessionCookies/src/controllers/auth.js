"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const User = require("../models/user")

module.exports = {
    login: async(req, res) => {
        const {email, password} = req.body
        if (email && password) {
            const user = await User.findOne({email: email})
            if (user) {

                // password === passwordEncrypt(password)
                res.status(202).send({
                    error: false,
                    user
                })
            }else {
                res.errorStatusCode = 401
                throw new Error("Wrong password or email")
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
    logout: async(req, res) => {},
}

