'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// const User = require("./src/models/user");
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Middlewares:

app.use(express.json())
require('express-async-errors')

// session-cookies

const session = require("cookie-session");

app.use(session({
    secret: process.env.KEY_CODE,
    // maxAge: 1000 * 60 * 60 *24 * 2 // 2 days
}))

// authentication middleware
/* ------------------------------------------------------- */

// const authentication = async(req, res, next) => {

//     req.user = null

//     if (req.session._id) {

//         const user = await User.findById(req.session._id)

//         if (user && user.password === req.session.password) {
//             req.user = user
//         } else {
//             req.session = null
//         }
//     }
//     next()
// }

// app.use(authentication)
/* ------------------------------------------------------- */
// Authentication:
app.use(require("./src/middlewares/authentication"))

// DB connection:
require('./src/configs/dbConnection')

/* ------------------------------------------------------- */
// Routes:

app.all('/', (req, res) => {
    // req.session.user = {name: "Gokce"}
    // req.session = null
    res.send({
        msg: 'WELCOME TO BLOG API',
        session: req.session,
        isLogin: req.user ? true : false
    })
})

app.use('/blog', require('./src/routes/blog'))
app.use('/user',require('./src/routes/user'))
app.use('/auth',require('./src/routes/auth'))

/* ------------------------------------------------------- */
// Catch Errors:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))