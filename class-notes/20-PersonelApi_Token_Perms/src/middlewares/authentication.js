"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// Authentication Control middleware

const Token = require("../models/token")

module.exports = async ( req, res, next) => {
    // console.log("middleware run") // her request'te çalışıyor. Thunder'da her send de çalışıyor.
    // console.log(req.headers)

    req.user = null



    const auth = req.headers.authorization || null
    console.log(auth)

    const tokenKey = auth ? auth.split(" ") : null

    // console.log(auth.split(" "));
    
    if (tokenKey && tokenKey[0] == Token) {
        const tokenData = await Token.findOne({token: tokenKey[1]}).populate("userId")
        console.log(tokenData);
        if (tokenData) req.user = tokenData.userId
        
    }
    

    next()    
}