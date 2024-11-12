"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { list, create, read, update, delete: deleteDepartment, personnels } = require('../controllers/department')
const {isLogin, isAdmin, isAdminOrLead} = require("../middlewares/permissions")

// URL : /departments

// const isAdmin = (req, res, next) => {
//     // console.log("isAdmin çalıştı");

//     if (req.user && req.user.isActive && req.user.isAdmin) {
//         next()
//     } else {
//         res.errorStatusCode = 403
//         throw new Error("NoPermission: You must login and to be Admin")
//     }
    
// }

router.route('/')
    .get(isLogin, list)
    .post(isAdmin,create)

router.route('/:id')
    .get(isLogin, read)
    .put(isAdmin, update)
    .patch(isAdmin, update)
    .delete(isAdmin, deleteDepartment)

router.get('/:id/personnels', isAdminOrLead, personnels)

/* ------------------------------------------------------- */
module.exports = router