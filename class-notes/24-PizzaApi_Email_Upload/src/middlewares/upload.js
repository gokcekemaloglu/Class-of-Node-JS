"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

// UPLOAD (Multer Middleware)
// npm i multer

const multer = require("multer")

const upload = multer({
    // dest: "./uploads"
    storage: multer.diskStorage({
        destination: "./uploads",
        filename: function (req, file, returnCallback) {
            // console.log("file-->", file)
            // returnCallback(error, this.filename)
            returnCallback(null, Date.now() + "_" + file.originalname)
            
        }
    })
})