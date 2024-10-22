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

// app.get("/",(req, res, next)=>{
//     console.log("middleware 1 çalıştı");
//     if (req.query.username == "clarusway") {
//         next()
//     } else {
//         res.send({
//             message: "username not exist"
//         })
//     }   
// })


// app.get("/",(req, res)=>{
//     res.send({
//         message: "welcome Clarusway"
//     })
// })

//?  

// app.get("/",(req, res, next)=>{
//     if (req.query.username == "clarusway") {
//         req.message = "welcome"
//     } else {        
//         req.message = "username not exist"        
//     }   
//     next()
// })

// app.get("/",(req, res)=>{
//     res.send({
//         message: req.message
//     })
// })

//?  midler arası mesaj aktarımı(iletimi)

// app.get("/",(req, res, next)=>{
//     req.message1 = "message from mid 1"      
//     next()
// })

// app.get("/",(req, res, next)=>{
//     req.message2 = "message from mid 2"      
//     next()
// })

// app.get("/",(req, res, next)=>{
//     req.message3 = "message from mid 3"      
//     next()
// })

// app.get("/",(req, res)=>{
//     res.send({
//         message1: req.message1,
//         message2: req.message2,
//         message3: req.message3,
//     })
// })

//?  app.gette yazan fonksiyonun yine aynı biçimde bir fonksiyon yazalım

// app.get("/",(req, res, next)=>{
//     req.message1 = "message from mid 1"      
//     next()
// })

// const middlewarex = (req, res, next)=>{
//     console.log("mid x");    
//     req.message1 = "message from mid 1"      
//     next()
// }

// const middleware1 = (req, res, next)=>{
//     console.log("mid 1");    
//     req.message1 = "message from mid 1"      
//     next()
// }

// const middleware2 = (req, res, next)=>{
//     console.log("mid 2");
//     req.message2 = "message from mid 2" 
//     res.send("test")     
//     // next()
// }

// app.get("/",middleware1, middlewarex, middleware2)

//?  

// const middleware1 = (req, res, next)=>{
//     console.log("mid 1");    
//     next()
// }

// const middleware2 = (req, res, next)=>{
//     console.log("mid 2");
//     // res.send("test")     
//     next()
// }

// app.use(middleware2, middleware1) // burada önce middlewarelere geldi ondan sonra get çalıştı

// app.get("/",(req, res, next)=>{
//     console.log("get");
    
//     next() // bunu yazmayınca middleware'lara uğramadan döngü sonlanıyor
//     res.send({
//         message: "get"
//     })
// })

// app.get("/",[middleware1, middleware2]) // array içinde de kullanılabilir
// app.use("/", [middleware2, middleware1]) // app.all


// app.use(middleware1)
// app.use(middleware2)
// app.use(middleware2, middleware1)

// const middlewares = require("./middlewares/") // array olarak alma
// const {middleware1, middleware2, middleware3} = require("./middlewares/") // obj olarak alma


const middlewares = require("./middlewares/") // objenin içinden alma

//* app use her path için çalışır. app get sadece belirlenen path için çalışır. o path'e özel

// app.use(middlewares.middleware1)

app.get("/",middlewares.middleware1, middlewares.middleware2, middlewares.middleware3, (req, res)=>{
    res.send({
        message: "get"
    })
})

app.listen(PORT,()=> console.log(`Server running on http://${HOST}:${PORT}`))
