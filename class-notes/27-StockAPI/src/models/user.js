"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require("../helpers/passwordEncrypt")
/* ------------------------------------------------------- */
/* 
{
    "username": "admin",
    "password": "aA?123456",
    "email": "admin@site.com",
    "firstName": "admin",
    "lastName": "admin",
    "isActive": true,
    "isStaff": true,
    "isAdmin": true
}
*/

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    // role: {
    //     type: String,
    //     enum: ["client"," staff", "admin", ...]
    // }
}, {
    collection: "users",
    timestamps: true
})
/* ------------------------------------------------------- */
//! database'e kaydetmeden hemen önce çalışan bir pre-middleware'miş
UserSchema.pre(["save", "updateOne"], function (next) { 
    // console.log("Pre-save run!");
    // console.log(this);

    // this; save komutunda body'deki bilgileri içeriyor. Ancak updateOne'da birçok veri döndürüyor. Biz içinden _update key'ine ulaşıyoruz.
    // const data = this; // database'e kaydedilecek olan veri --> this // data artık bağımsiz birşeye dönüşüyor, this'deki verilerle dolmuş olan bambaşka bir veri

    const data = this?._update ?? this; // updateOne'a uyarlanmış hali oluyor

    // Email Control
    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) // regex kodundan geçecek email // direk kontrol etmesin datadan gelen bir email varsa baksın diye aşağıdaki turnery'i yazdık
    const isEmailValidated = data.email ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) : true

    if (!isEmailValidated) {
        // throw new Error("Email is not validated") // Bu şekilde ErrorHandler'a yönlendiremeyecek. O nedenle next içine yazıyoruz
        next(new Error("Email is not validated"))
    }

    const isPasswordValidated = data.password ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.]).{8,}$/.test(data.password) : true

    console.log(isPasswordValidated);
    

    if (!isPasswordValidated) {
        next(new Error("Password must be at least 8 characters long and contain at least one special character and  at least one uppercase character"))
    }

    if (data.password) {
        this.password = passwordEncrypt(data.password)
    }    
    next()
})


module.exports = mongoose.model("User", UserSchema)
