"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("express-async-errors")
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const DB_PATH = process.env.DB_PATH || "./db.sqlite3";
const DB_NAME = process.env.DB_NAME || "sqlite";

/* ------------------------------------------------------- */
// Accept(Parse) json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

/* ------------------------------------------------------- */

//? Sequelize
const {Sequelize, DataTypes} = require("sequelize")

// Creating new instance
const sequelize = new Sequelize(`${DB_NAME}:${DB_PATH}`)


//* Creating model
// sequelize.define("todos", {attributes})

const Todo = sequelize.define("todos", {
    // id:{  //* this attribute automatically created in sequelize
    //     type: DataTypes.INTEGER,
    //     allowNull: false, // default : true
    //     unique: true, // default : false
    //     comment: "This is comment",
    //     primaryKey: true, // default : false
    //     autoIncrement: true, // default : false
    //     field: "custom_name",
    //     defaultValue: 0 // default: null
    // }
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // description: {
    //     type: DataTypes.TEXT
    // },
    description: DataTypes.TEXT, // tek satır olduğundan diğer kısımları kaldırıyoruz
    priority: { // -1: low, 0: Normal, 1: High
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

    // No need to define createdAt and updateAt, they are default and authomatically created
})

//! sync - JUST EXECUTE ONCE // Databesi bir kere çalıştırarark tanıtıyoruz
// sequelize.sync() // executing model
// sequelize.sync({force: true}) //* DROP TABLE & CREATE TABLE; executing model and deleting existing table if exists
// sequelize.sync({alter: true}) //! to BACKUP & DROP TABLE & CREATE TABLE from Backup




// Connecting to DB
sequelize.authenticate()
    .then(()=>console.log("*DB Connected*"))
    .catch(()=>console.log(" *DB Not Connected* "))

/* ------------------------------------------------------- */


// Routes

const router = express.Router()

// Read Todo

router.get("/todo", async(req, res) => {

    // const result = await Todo.findAll()
    const result = await Todo.findAndCountAll()

    res.status(200).send({
        error: false,
        result
    })
})

// Create TODO

router.post("/todo", async(req, res) => {

    // await Todo.create({
    //     title: "Title1",
    //     description: "Description1",
    //     priority: 0,
    //     isDone: false
    // })

    const result = await Todo.create(req.body)

    res.status(201).send({        
        error: false,
        result
    })
})

app.use(router)






/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));