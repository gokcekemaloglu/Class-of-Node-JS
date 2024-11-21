"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

// E-MAIL:

// https://www.nodemailer.com/
// npm i nodemailer

const nodemailer = require("nodemailer");

module.export = function (to, subject, message) {
  //* GoogleMail (gmail)
  //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gokce.kemaloglu@gmail.com",
      pass: "your_password",
    },
  });

  // Send Mail

  transporter.sendMail(
    {
      from: "gokce.kemaloglu@gmail.com",
      to: to,
      subject: subject,
      text: message,
      html: "message",
    },
    function (error, success) {
      success ? console.log("SUCCESS:", success) : console.log("ERROR:", error);
    }
  );
};
