"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

/* ------------------------------------------------------- */

const crypto = require('node:crypto')

// parameters
const keyCode = '21yuifhsdkjfgisafisadhfsgawfhssvsfifashfusagfjsdga' // secretKey 
const loopCount = 10_000 // number of loops
const charCount = 32 // write 32 for 64
const encType = 'sha512' // Type of algorithm

// const keyCode = process.env.KEY_CODE // secretKey 
// const loopCount = Number(process.env.LOOP_COUNT) // number of loops
// const charCount = Number(process.env.CHAR_COUNT) // write 32 for 64
// const encType = process.env.ENC_TYPE // Type of algorithm

module.exports = (password) => {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}

// module.exports = passwordEncrypt 
/* ------------------------------------------------------- */