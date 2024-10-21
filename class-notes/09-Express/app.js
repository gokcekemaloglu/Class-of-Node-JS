" use strict"
/* 
    Express js 
*/
/*
    npm init -y
    npm i express
    npm i dotenv
*/

//? Express server start

const express = require("express")
const app = express() // express üzerinde server çalıştırır(oluşturur)

// dotenv 
/*
const x = require("dotenv")
x.config() // .env dosyasını okur
*/
require("dotenv").config() // .env'deki tüm değişkenler process env'ye alınır
// console.log(process.env);
// app.listen(8000)
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || "127.0.0.1"

// req and res from request and response

app.get("/",(res, req)=>{
    res.write("hello")
    res.write("hello")
    res.write("hello")
})


// app.listen(8000) // en ilkel hali
// app.listen(8000, () => console.log("Server is running"))
// app.listen(PORT, () => console.log("Server is running on http://127.0.0.1"))
app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))

