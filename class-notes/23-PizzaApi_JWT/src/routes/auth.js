"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { login, logout, refresh } = require('../controllers/auth')

// /auth
router.post('/login', login)
router.get('/refresh', refresh)
router.get('/logout', logout)

/* ------------------------------------------------------- */
module.exports = router