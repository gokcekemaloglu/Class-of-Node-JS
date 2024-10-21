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

// app.get("/",(req, res)=>{
    //? 1
    // res.write("hello ")
    // res.write("clarusway")
    // res.end()
    //? 2
    // res.write(JSON.stringify({ // obje'yi yazamaz(bsamaz-render edemez)
    //     message: "clarusway"
    // }))    
    // res.end()
    //? 3
    // res.send({ // obje dönüşümünü yapar
    //     message: "clarusway"
    // })
    // res.send("hello clarusway")
// })
// app.get("/",(req, res)=>{ res.send("method GET")})
// app.post("/",(req, res)=>{ res.send("method POST")})
// app.put("/",(req, res)=>{ res.send("method PUT")})  // PUT = PATCH
// app.patch("/",(req, res)=>{ res.send("method PATCH")})  // PUT = PATCH
// app.delete("/",(req, res)=>{ res.send("method DELETE")})

// app.all("/",(req, res)=>{ res.send("method ALL")}) // çok tavsiye edilmiyor
// app.get("/abc(x)123",(req, res)=>{ res.send("method GET")})
// app.get("/abc(x?)123",(req, res)=>{ res.send("method GET")}) // x? olabilir de olmayabilir de demek
// app.get("/abc(x+)123",(req, res)=>{ res.send("method GET")}) // x+ n adet x alabilir demek
// app.get("/abc(*)123",(req, res)=>{ res.send("method GET")}) //  (*) ne gelirse gelsin demek

// https://regexr.com/
// regex'de path  ilave etm

// app.get(/abc/,(req, res)=>{ res.send("method GET")}) // /abc/ içersin anlamında ve tırnak olmayacak, ve iki / arasında olacak
// app.get(/abc$/,(req, res)=>{ res.send("method GET")}) // abc başına ne gelirse gelsin ama en az bir karakter olsun ve sonuna / ekleme
// app.get(/^\/abc$/,(req, res)=>{ res.send("method GET")}) // abc sonuna ne gelirse gelsin

//? URL parametre

app.get("/user/:userId/:name",(req, res)=>{    
    res.send({
        url: {
            protocol: req.protocol,
            secure: req.secure,
            url:req.url,
            originalURL:req.originalUrl, // hangi routerda isek onu verir ileride bakılacak
            hostname:req.hostname,
            subdomain: req.subdomains,

            method:req.method,
            params:req.params,
            query:req.query,

        }
    })

})


// app.listen(8000) // en ilkel hali
// app.listen(8000, () => console.log("Server is running"))
// app.listen(PORT, () => console.log("Server is running on http://127.0.0.1"))
app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))

