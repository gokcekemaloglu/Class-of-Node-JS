"use strict";

/* ------------------------------------
        Error Handling in NodeJS
---------------------------------------- */

/*
 * npm init -y
 * npm i express dotenv
 * echo PORT=8000 > .env
 * cat > .gitignore  (kopyalanan verileri terminale yapıştır ardından ctrl + c ile çıkış yap )
 */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------ */
// Error Handling

// app.get("/user/:id", (req, res) => {

//     const {id} = req.params

//     if (isNaN(id)) {
//         // res.errorStatusCode = 400
//         throw new Error("ID is not a number", {cause: "The Error uccured at params. (hata paramsdan gelen id'den oluştu)"})
//     } else {
//         res.send({
//             error: false,
//             message: "Hi there!",
//             id
//         })
//     }
// })

// const errorHandler = (error, req, res, next) => {
//     const statusCode = res?.errorStatusCode ?? 500

//     res.status(statusCode).send({
//         error: true,
//         message: error.message,
//         cause: error.cause,
//     })
// }
// app.use(errorHandler)
/* ------------------------------------------ */

//? TRY CATCH

// errorHandler kullanmak istemiyorsak catch'e yazıyoruz herşeyi;

// app.get("/user/:id", (req, res, next) => {
//   const { id } = req.params;

//   try {
//     if (isNaN(id)) {
//       res.errorStatusCode = 400
//       throw new Error("ID is not a number", {cause: "hata paramsdan gelen id'den oluştu"});
//     } else {
//       res.send({
//         error: false,
//         message: "Hi there!",
//         id,
//       });
//     }
//   } catch (error) {
//     // const statusCode = res?.errorStatusCode ?? 500;

    
//     // res.status(statusCode).send({
//         //   error: true,
//         //   message: error.message,
//         //   cause: error.cause,
//     // });
//     next(error) // Send the error to -> Error Handler(illaki errorHandler da kullanmak istiyorsak)
//   }
// });

// const errorHandler = (error, req, res, next) => {
//     const statusCode = res?.errorStatusCode ?? 500

//     res.status(statusCode).send({
//         error: true,
//         message: error.message,
//         cause: error.cause,
//     })
// }
// app.use(errorHandler)

/* ------------------------------------------ */

//? ASYNC FUNCTION

// const asyncFunction = async() => {
//     throw new Error("This error message is from async function", { cause: "this is asnyc cause message" })
// }

// app.get("/async", async (req, res, next) => {
//     await asyncFunction()    
//     .catch(next) // errorhandler'ı async func. bu şekilde çalıştırabiliyoruz.Send the error to ->  Error Handler
//     res.send({
//         error: false,
//         msg: "All is well!",
//     })
// })

/* ------------------------------------------ */
// express-async-errors

require("express-async-errors")

app.get('/async', async (req, res, next) => {
    res.errorStatusCode = 400
    throw new Error('Created error in async-func')
})

/* ------------------------------------------ */

// async hataları yakalayamıyor, sadece syncron'ları yakalıyor
const errorHandler = (error, req, res, next) => {
    const statusCode = res?.errorStatusCode ?? 500

    res.status(statusCode).send({
        error: true,
        message: error.message,
        cause: error.cause,
        stack: error.stack // More detail about error(detaylı bir hata verisi veriyor)
    })
} // herzaman en altta olacak
app.use(errorHandler) 

/* ------------------------------------------ */
app.listen(PORT, () => console.log(`Running at: http://127.0.0.1:${PORT}`));
