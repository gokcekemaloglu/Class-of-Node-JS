"use strict"

/* ------------------------------------
        Error Handling in NodeJS
---------------------------------------- */

/* 
* npm init -y
* npm i express dotenv
* echo PORT=8000 > .env 
* cat > .gitignore  (kopyalanan verileri terminale yapıştır ardından ctrl + c ile çıkış yap )
*/


const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 8000


app.listen(PORT, ()=>console.log(`Running at: http://127.0.0.1:${PORT}`))
