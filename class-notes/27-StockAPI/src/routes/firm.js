"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
const firm = require('../controllers/firm')

// routes

router.route("/")
    .get(firm.list)
    .post(firm.create)
router.route("/:id")
    .get(firm.read)
    .put(firm.update)
    .patch(firm.update)
    .delete(firm.delete)

module.exports = router