'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// mongoose
const mongoose = require("mongoose")

// const SchemaName = new mongoose.Schema({...fields}, {...settings})
// const SchemaName = new mongoose.Schema({
//     // id: number // zaten kendisi oluşturuyor
//     // _id: ObjectId // mongoDB'den _id oluyor

//     fieldName: {
//         type: Number,
//         default: null, // if value doesn't send
//         trim: true,
//         unique: true,
//         // required: true
//         required: [true, "This is required filedname"],
//         index: true, // to access data faster
//         // enum: [1, 2, 3],
//         // enum: ["1", "2", "3"],
//         enum: [["1", "2", "3"], "This is enum error message"],
//         // validate: (data) => true,
//         validate: [
//             (data)=>{return true},
//             "This is validate error message"
//         ],
//         get: (data) => data, // auto runs - to get the data from db(list read yaptığımız yerlerden çalışan metod)
//         set: (data) => data // auto runs - to save data to db
//     },
//     fieldName: String // shorthand
// }, {
//     collection: "tableName",
//     timestamps: true // createdAt , updatedAt özellikleri eklenmiş oluyor nununla
// })

/* ------------------------------------------------------- */

const BlogCategorySchema = new mongoose.Schema({
    // _id
    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
    collection: "BlogCategories",
    timestamps: true
})
 
