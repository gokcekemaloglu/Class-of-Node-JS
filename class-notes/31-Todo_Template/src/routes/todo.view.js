"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
/*------------------------------------------------------- */


const router = require("express").Router()
// Contorollers
const { list, create, read, update, delete: deleteTodo } = require('../controllers/todo.view')

/*------------------------------------------------------- */

// router.route('/')
//     .get(list)
//     .post(create)
router.get('/', list)
router.all("/create", create) // get, post // browser sadece bu iki metodu yapabiliyor başka yapamıyor

// router.route('/:id')
//     .get(read)
//     .put(update)
//     .delete(deleteTodo)

router.get("/:id", read)
router.get("/:id/delete", deleteTodo)
router.get("/:id/update", update)

module.exports = router