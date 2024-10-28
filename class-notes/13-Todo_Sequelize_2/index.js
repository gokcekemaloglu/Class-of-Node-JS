"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */


// result neden array gelmiyor araştır! routerda

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
/* ------------------------------------------------------- */
// AsyncErrors to errorHandler
require("express-async-errors")

// Accept(Parse) json data:
app.use(express.json())
/* ------------------------------------------------------- */

// Routes
app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})


app.use(require("./src/routes/todo"))
/* ------------------------------------------------------- */

// Error Handler

// const errorHandler = require("./src/middlewares/errorHandler")
// app.use(errorHandler)
//* or best practise

app.use(require("./src/middlewares/errorHandler"))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));