"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
/* ------------------------------------------------------- *

npm i mongoose-unique-validator // güzel bir hata mesaj vermek için ek paket
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
const emailValidation = require("../helpers/emailValidation");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const uniqueValidator = require("mongoose-unique-validator");
// User Model:
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
      // select: false // userların password'ünü görmemek için //  database'den password'ün gelmesini engelliyoruz
    },

    email: {
      type: String,
      trim: true,
      required: [true, "An Email address is required"],
      unique: true, // [true, "There is this email. Email field must be unique"] // bu hiçbir zaman çaşlımayacak bir hata mesajı, duplicate mesajı oluyor
      validate: [
        (email) => emailValidation(email),
        "Email format is not valid",
      ],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isStaff: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users", timestamps: true },
);

UserSchema.plugin(uniqueValidator, {
  message: "This {PATH} is exist",
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);
