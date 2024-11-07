'use strict'

const { Model } = require("mongoose")

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

module.exports = async(req, res, next) => {
    // SEARCHING & FILTERING & SORTING & PAGINATION

        // console.log("line 101",req.query)
        // Filtering:
        // URL?filter[fieldName1]value1&filter[fieldName2]=value2
        const filter = req.query?.filter || {}

        // Searching:
        // URL?search[fieldName1]=value1&search[fieldName2]=value2
        // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        // { "<field>": { "$regex": "pattern", "$options": "<options>" } }

        const search = req.query?.search || {}

        for (let key in search) // key bizim verdiğimiz değişkendi
            search[key] = {$regex: search[key]} // assigning new value
            // console.log(search[key])        
            // console.log(search.title)        
            // console.log(search["title"]) // static bir şekilde yazmıştık search[key] şeklinde yazarak dinamikleştiriyoruz

        console.log(search)


        // Sorting:
        // URL?sort[fieldName1]=asc&sort[fieldName2]=desc

        const sort = req.query.sort || {}

        // Pagination: MongoDBde pagination yok, limit ve skip var. 
        // Limit:
        let limit = Number(req.query?.limit)
        limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE)
        // console.log(limit)

        // Page: 
        let page = Number(req.query?.page)
        page = page > 0 ? page : 1

        // Skip:
        let skip = Number(req.query?.skip)
        skip = skip > 0 ? skip : ((page - 1) * limit)
        // skip = (page - 1) * limit
        // console.log("limit--",limit)
        // console.log("skip--",skip)
        // console.log("page--",page)
        
        res.getModelList = async (Model, populate = null) => {
            return await Model.find({...filter, ...search}).sort(sort).limit(limit).skip(skip).populate(populate)
        }
        res.getModelListDetails = async(Model)=>{
            const data = await Model.find({...filter, ...search})
            const details = {
                filter,
                search,
                sort,
                skip,
                limit,
                page,
                totalRecord: data.length
            }
            return details
        }
/* ------------------------------------------------------- */
        next()
}
