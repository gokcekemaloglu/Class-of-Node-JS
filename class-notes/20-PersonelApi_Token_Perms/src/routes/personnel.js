"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { list, create, read, update, delete: deletePersonnel } = require('../controllers/personnel')

router.use(isAdmin) // this is router middleare, it runs before every method


// URL : /personnels

router.route('/')
    .get(list)
    .post(create)

router.route('/:id')
    .get(read)
    .put(update)
    .patch(update)
    .delete(deletePersonnel)

/* ------------------------------------------------------- */
module.exports = router