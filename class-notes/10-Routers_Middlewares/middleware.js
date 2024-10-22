'use strict'

//! EXPRESSJS MIDDLEWARE

const express=require('express')
const app=express() 

require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

// app.all("/",(req, res)=>{
//     res.send({
//         message: "Middleware"
//     })
// })

// app.get("/",(1. param request, 2. param response, 3. param varsa next)=>{
// app.get("/",(x, y, z)=>{

// eğer 3 parametre varsa o bir middleware'dir
// app.get("/",(req, res, next)=>{
//     console.log("middleware 1 çalıştı");
//     next()
    
// })
// app.get("/",(req, res, next)=>{
//     console.log("middleware 2 çalıştı");
//     next()

// })

// app.get("/",(req, res)=>{
//     res.send({
//         message: "Middleware"
//     })
// })

//* Eğer username query ile gönderildiyse next çalışsın, gönderilmediyse hata mesajı verilsin

app.get("/",(req, res, next)=>{
    console.log("middleware 1 çalıştı");
    if (req.query.username == "clarusway") {
        next()
    } else {
        res.send({
            message: "username not exist"
        })
    }   
})


app.get("/",(req, res)=>{
    res.send({
        message: "welcome Clarusway"
    })
})

app.listen(PORT,()=> console.log(`Server running on http://${HOST}:${PORT}`))
