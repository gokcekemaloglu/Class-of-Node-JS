"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

/* ------------------------------------------------------- */
// controllers
const { blogCategory, blogPost } = require('../controllers/blog')

// URL : /blog/categoriy

router.route('/category')
    .post(blogCategory.create)
    .get(blogCategory.list)
router.route("/category/:categoryId")
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)
    .delete(blogCategory.delete)

module.exports = router