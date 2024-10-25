"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

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
const sequelize = new Sequelize("sqlite:./db.sqlite3")


// Creating model
// sequelize.define("todos", {attributes})

sequelize.define("todos", {
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
    
})



// Connecting to DB
sequelize.authenticate()
    .then(()=>console.log("*DB Connected*"))
    .catch(()=>console.log(" *DB Not Connected* "))







// continue from here...
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