"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require('express').Router()
const {login} = require("../controllers/auth")
/* ------------------------------------------------------- */

// URL: /auth

router.route("/login").post(login)
// router.route("/logout").get(logout)


/* ------------------------------------------------------- */
module.exports = router