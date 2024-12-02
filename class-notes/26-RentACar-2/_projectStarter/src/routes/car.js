"use strict";
/* -------------------------------------------------------
| FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
const car = require("../controllers/car");
const permissions = require("../middlewares/permissions");
/* ------------------------------------------------------- */
// URL: /cars

router
  .route("/")
  .get(car.list) //users
  .post(permissions.isStaffOrisAdmin, car.create);

router
  .route("/:id")
  .get(car.read) //user
  .put(permissions.isStaffOrisAdmin, car.update)
  .patch(permissions.isStaffOrisAdmin, car.update)
  .delete(permissions.isAdmin, car.delete);
module.exports = router;
