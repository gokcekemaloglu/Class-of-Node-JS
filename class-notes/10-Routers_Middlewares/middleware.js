'use strict'

//! EXPRESSJS MIDDLEWARE

const express=require('express')
const app=express() 

require('dotenv').config()

const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

app.all("/",(req, res)=>{
    res.send({
        message: "Middleware"
    })
})


app.listen(PORT,()=> console.log(`Server running on http://${HOST}:${PORT}`))
