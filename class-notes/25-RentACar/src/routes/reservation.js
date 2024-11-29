"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
const reservation = require("../controllers/reservation");
const permissions = require("../middlewares/permissions");
/* ------------------------------------------------------- */
// routes/reservation:
router
  .route("/")
  .get(permissions.isLogin, reservation.list) //users
  .post(permissions.isLogin, reservation.create);

router
  .route("/:id")
  .get(permissions.isLogin, reservation.read) //user
  .put(permissions.isStaffOrisAdmin, reservation.update)
  .patch(permissions.isStaffOrisAdmin, reservation.update)
  .delete(permissions.isAdmin, reservation.delete);
module.exports = router;
