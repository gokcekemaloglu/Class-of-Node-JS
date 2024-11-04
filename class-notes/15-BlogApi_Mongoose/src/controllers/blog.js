'use strict'
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const {BlogCategory, BlogPost} = require("../models/blog")

// blogCategory should be done


/* ------------------------------------------------------- */
//blogCategory controllers
module.exports.blogCategory = {
    list: async(req, res) => {
        const result = await BlogCategory.find()
        res.status(200).send({
            error: false,
            result
        })
    },
    create: async(req, res) => {
        const result = await BlogCategory.create(req.body)
        res.status(201).send({
            error: false,
            result
        })
    },
    read: async(req, res) => {
        // console.log(req.params)        
        // const {categoryId} = req.params
        // const result = await BlogCategory.findOne({_id: req.params.categoryId})
        const result = await BlogCategory.findById(req.params.categoryId)
        res.status(200).send({
            error: false,
            result
        })
    },
    update: async(req, res) => {
        const {categoryId} = req.params

/* ------------------------------------------------------- */

        // const result = await BlogCategory.updateOne({...filter}, {...data})
        // const {modifiedCount} = await BlogCategory.updateOne({_id: categoryId}, req.body)
        
        // res.status(modifiedCount ? 202 : 400).send({
        //     // error: Boolean(modifiedCount), 
        //     // error: !!modifiedCount, // get the boolean value of the data // shorthand
        //     error: !modifiedCount, 
        //     new: await BlogCategory.findById(categoryId)
        // })
/* ------------------------------------------------------- */

        const updatedCategory = await BlogCategory.findByIdAndUpdate(categoryId, req.body, {
            new: true, // Güncellenmiş kategoriyi geri döndür // return updated daha
            // runValidators: true // Validasyon kontrollerini çalıştır
        });
        
        res.status(202).send({            
            error: false, 
            updatedCategory
        })

    },
    delete: async(req, res) => {
        const {deletedCount} = await BlogCategory.deleteOne({_id: req.params.categoryId}) // deletedCount return 1 if it is success otherwise return 0
        // res.status(deletedCount ? 204 : 404).send({            
        //     error: !deletedCount,             
        // })
        if (deletedCount) res.sendStatus(204)
        else throw new Error("Something went wrong")
    },
}

/* ------------------------------------------------------- */
//blogPost controllers
module.exports.blogPost = {
    list: async(req, res) => {
        const result = await BlogPost.find()
        res.status(200).send({
            error: false,
            result
        })
    },
    create: async(req, res) => {
        const result = await BlogPost.create(req.body)
        res.status(201).send({
            error: false,
            result
        })
    },
    read: async(req, res) => {
        
        const result = await BlogPost.findById(req.params.postId)
        res.status(200).send({
            error: false,
            result
        })
    },
    update: async(req, res) => {
        const {postId} = req.params

        const updatedPost = await BlogPost.findByIdAndUpdate(postId, req.body, {
            new: true, 
        });
        
        res.status(202).send({            
            error: false, 
            updatedPost
        })

    },
    delete: async(req, res) => {
        const {deletedCount} = await BlogPost.deleteOne({_id: req.params.postId}) 
        
        if (deletedCount) res.sendStatus(204)
        else throw new Error("Something went wrong")
    },
}

