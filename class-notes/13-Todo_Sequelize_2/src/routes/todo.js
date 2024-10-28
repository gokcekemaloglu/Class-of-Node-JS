"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// Routes and Controllers

// const express = require("express");
// const router = express.Router()
// or
const router = require("express").Router()
const Todo = require("../models/todo")
/* ------------------------------------------------------- */

const {list, create, read, update, delete: deleteTodo} = require("../controllers/todo")
// const todo = require("../controllers/todo")
//! CRUD Operations

//* List Todo

// router.get("/todo", todo.list)
router.get("/todo", list)

//! CRUD Operations

//* Create TODO

router.post("/todo", create)

//* Read Todo

router.get("/todo/:id", read)


//* Update Todo

router.put("/todo/:id", update)


//* Delete Todo

router.delete("/todo/:id", deleteTodo)

module.exports = router