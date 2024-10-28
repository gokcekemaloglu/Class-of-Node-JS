"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("express-async-errors")
require("dotenv").config();
const PORT = process.env.PORT || 8000;


/* ------------------------------------------------------- */
// Accept(Parse) json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

// result neden array gelmiyor araştır!

/* ------------------------------------------------------- */

// Routes

app.use(require("./src/routes/todo"))
/* ------------------------------------------------------- */

// Error Handler

// const errorHandler = require("./src/middlewares/errorHandler")
// app.use(errorHandler)
//* or best practise

app.use(require("./src/middlewares/errorHandler"))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));