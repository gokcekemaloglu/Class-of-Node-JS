"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
/*------------------------------------------------------- */

// const express = require("express")
// const todo = require('../controllers/todo')

const router = require("express").Router()
// Contorollers
const { list, create, read, update, delete: deleteTodo } = require('../controllers/todo')


/*------------------------------------------------------- *

// List Todo:
router.get('/todo', list)

// CRUD Operations -->

// Creeate Todo:
router.post('/todo', create)

// Read Todo
router.get('/todo/:id', read)

// Updata Todo
router.put('/todo/:id', update)


// Delete Todo
router.delete('/todo/:id', deleteTodo)
/*------------------------------------------------------- */

router.route('/todo')
    .get(list)
    .post(create)

router.route('/todo/:id')
    .get(read)
    .put(update)
    .delete(deleteTodo)

module.exports = router