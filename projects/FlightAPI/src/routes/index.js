"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */


// documents
router.use("/documents", require("./document"))

/* ------------------------------------------------------- */
module.exports = router