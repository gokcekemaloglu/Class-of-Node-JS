"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// const express = require("express");

// or
// const router = express.Router()
// const Todo = require("../models/todo")
const router = require("express").Router()
/* ------------------------------------------------------- */

//  Controllers
const {list, create, read, update, delete: deleteTodo} = require("../controllers/todo") // delete'de hata verdi JS dilinde olduğu için isim değiştirdik
/*------------------------------------------------------- *

// CRUD Operations -->

// List Todo:
router.get('/todo', list)


// Creeate Todo:
router.post('/todo', create)

// Read Todo
router.get('/todo/:id', read)

// Updata Todo
router.put('/todo/:id', update)

// Delete Todo
router.delete('/todo/:id', deleteTodo)
/*------------------------------------------------------- */

//! CRUD Operations

//* List Todo - Create TODO
// const todo = require("../controllers/todo")
// router.get("/todo", todo.list)
router.route("/todo")
    .get(list)
    .post(create)

//! CRUD Operations 

//* Read Todo - Update Todo - Delete Todo

router.route("/todo/:id")
    .get(read)
    .put(update)
    .delete(deleteTodo)

module.exports = router