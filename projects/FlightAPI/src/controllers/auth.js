"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
// Auth Controller:

const User = require("../models/user")

module.exports = {
    login: async(req, res) => {

        const {userName, email, password} = req.body

        if (!((userName || email) && password)) {
            res.errorStatusCode = 401
            throw new Error("Username / Email and Password required!")
        }

        const user = await User.findOne({$or: [ {userName}, {email}]})
        
        if (!user) {
            res.errorStatusCode = 401
            throw new Error("Wrong Username / Email or Password!")
        }

        

    }
}
