"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */


const { list, create, read, update, deletePizza } = require('../controllers/pizza')
const upload = require("../middlewares/upload")

/* ------------------------------------------------------- */
// UPLOAD (Multer Middleware)
// npm i multer

// const multer = require("multer")
// const upload = multer({
//     // dest: "./uploads"
//     storage: multer.diskStorage({
//         destination: "./uploads",
//         filename: function (req, file, returnCallback) {
//             // console.log("file-->", file)
//             // returnCallback(error, this.filename)
//             returnCallback(null, Date.now() + "_" + file.originalname)
            
//         }
//     })
// })

/* ------------------------------------------------------- */
// URL: /pizzas

router.route('/')
    .get(list)
    .post(upload.single("image"), create)
    // .post(upload.array("image"), create)
    // .post(upload.any("image"), create)

router.route('/:id')
    .get(read)
    .put(upload.single("image"), update)
    .patch(upload.single("image"), update)
    .delete(deletePizza)

/* ------------------------------------------------------- */
module.exports = router