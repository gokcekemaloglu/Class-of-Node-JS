"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

/* ------------------------------------------------------- */
// controllers
const { blogCategory, blogPost } = require('../controllers/blog')

router.route('/category')
    .post(blogCategory.create)

module.exports = router