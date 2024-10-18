"use strict"

/* -------------------------------------------- *
                       NodeJs Server
/* -------------------------------------------- */


require("dotenv").config()

const PORT = process.env.PORT
const HOST = process.env.HOST

// HTTP SERVER
const http = require("node:http") // built in module

/* -------------------------------------------- */

// http.createServer((request, response)=>{...})

// const app = http.createServer((request, response) => {

//     response.end("hello world response end")
//     console.log("hello world from console");
    
// })

// DEFAULT server domain (local domain) => localhost : 127.0.0.1

// app.listen(PORT, ()=>console.log(`Server is running at : http://${HOST}:${PORT}`))

// console.log("Hello world!",PORT, HOST);

/* -------------------------------------------- */

// http.createServer((req, res) => {

//     // console.log(req);
//     console.log(req.url);

//     if(req.url == "/") {
//         res.end("<h1>Home Page</h1>")
//     } else if (req.url == "/about") {
//         res.end("<h1>This is About Page</h1>")
//     } else {
//         res.end("<h1>This is any page</h1>")
//     }

    
// }).listen(PORT, () => console.log(`Server is running at : http://${HOST}:${PORT}`))

/* -------------------------------------------- */


http.createServer((req,res)=> {
    // res.write("<h1>This is write - 1</h1>")
    // res.write("<h1>This is write - 2</h1>")
    // res.write("<h1>This is write - 3</h1>")
    // res.write("<h1>This is write - 4</h1>")
    // res.write("<h1>This is write - 5</h1>")

    res.end()
    // console.log("this is after res end");
    

}).listen(PORT, () => console.log(`Server is running at : http://${HOST}:${PORT}`))
