"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

// Users
router.use("/users", require("./user"))
// auth
router.use("/auth", require("./auth"))
// Passenger
router.use("/passengers", require("./passenger"))


// documents
router.use("/documents", require("./document"))

/* ------------------------------------------------------- */
module.exports = router