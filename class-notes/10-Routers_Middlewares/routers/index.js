'use strict'

//! EXPRESSJS ROUTER



const router = require("express").Router() // router application'ı oluşturdu. Bu bir server değil sadece router oluşturdu. router sadece routing amaçlı bir app'tir.

//oluşan router server'a bildirilir. Bu yaptığımız bir middleware olmuş oluyor.
// app.use(router)

// router.get("/",(req, res)=>{res.send({message: "GET"})})
// router.get("/user",(req, res)=>{res.send({message: "GET for user path"})})
// router.post("/",(req, res)=>{res.send({message: "POST"})})

//? router.route()
router.route("/")
    .get((req, res)=>{res.send({message: "GET"})})
    .post((req, res)=>{res.send({message: "POST"})})
    .put((req, res)=>{res.send({message: "PUT"})})
    .delete((req, res)=>{res.send({message: "DELETE"})})

router.get("/user",(req, res)=>{res.send({message: "GET for user path"})})

module.exports = router