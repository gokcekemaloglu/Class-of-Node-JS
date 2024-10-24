"use strict";

/* ------------------------------------
        EXPRESSJS - BUILT IN MIDDLEWARES
---------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------ */

//* Recieving Data

//? Convert/Parse coming data in body from json (dataları recieve yapabilen kod/fonk)
app.use(express.json()) 

//? Convert/Parse data coming in text from json (body'den gelen dataları recieve yapabilen kod/fonk)
app.use(express.text())

//? Convert/Parse data coming in Form-encode (Form-encode'den gelen dataları recieve yapabilen kod/fonk)
app.use(express.urlencoded())

app.all("/:id", (req, res) => {

    const {params, query, body, headers} = req
    
    res.send({
        error: false,
        params,
        query,
        body,
        headers,
    })
})




app.listen(PORT, () => console.log(`Running at: http://127.0.0.1:${PORT}`));
