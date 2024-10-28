"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const DB_PATH = process.env.DB_PATH || "./db.sqlite3";
const DB_NAME = process.env.DB_NAME || "sqlite";

/* ------------------------------------------------------- */

//? Sequelize
const {Sequelize, DataTypes} = require("sequelize");


// Creating new instance
const sequelize = new Sequelize(`${DB_NAME}:${DB_PATH}`)


//* Creating model
// sequelize.define("modelName", {attributes/fields})

const Todo = sequelize.define("todos", {
    // id:{  //* this attribute automatically created in sequelize
    //     type: DataTypes.INTEGER,
    //     allowNull: false, // default : true
    //     unique: true, // default : false
    //     comment: "This is comment",
    //     primaryKey: true, // default : false
    //     autoIncrement: true, // default : false
    //     field: "custom_name",
    //     defaultValue: 0 // default: null
    // }
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // description: {
    //     type: DataTypes.TEXT
    // },
    description: DataTypes.TEXT, // tek satır olduğundan diğer kısımları kaldırıyoruz
    priority: { // -1: low, 0: Normal, 1: High
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

    // No need to define createdAt and updateAt, they are default and authomatically created
})

//! sync - JUST EXECUTE ONCE // Database'i bir kere çalıştırarark tanıtıyoruz
// sequelize.sync() // executing model-(Parametre göndermediğimiz)
// sequelize.sync({force: true}) //* DROP TABLE & CREATE TABLE; executing model and deleting existing table if exists (dezavantajı: table'da backup yapmadan direk create yaptığı için önceden gönderdiklerimiz siliniyor)
// sequelize.sync({alter: true}) //! to BACKUP & DROP TABLE & CREATE TABLE from Backup

/* ------------------------------------------------------- */

// Connecting to DB
sequelize.authenticate()
    .then(()=>console.log("*DB Connected*"))
    .catch(()=>console.log(" *DB Not Connected* "))
/* ------------------------------------------------------- */