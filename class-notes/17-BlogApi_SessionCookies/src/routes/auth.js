"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router()

const {login, logout} = require("../controllers/auth")

// URL : /auth

router.post("/login",login)
router.all("/logout",logout)

module.exports = router