"use strict";
/* -------------------------------------------------------
| FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Car Controller:

const Car = require("../models/car");
const dateValidation = require("../helpers/dateValidation");
const Reservation = require("../models/reservation")

module.exports = {
  list: async (req, res) => {
    /*
        #swagger.tags = ["Cars"]
        #swagger.summary = "List Cars"
        #swagger.description = `
            You can send query with endpoint for search[], sort[]page and limit.
            <ul> Examples:
                <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                <li>URL/?<b>page=2&limit=1</b></li>
            </ul>
        `
    */

    // don't show cars which are not available
    let customFilter = {isAvailabel: true}
    if ( req.user.isAdmin || req.user.isStaff) customFilter = {}


    // URL?startDate=2025-01-01&endDate=2025-01-09
    const {startDate, endDate} = req.query

    // isValid Date
    dateValidation(startDate, endDate)
    
    
    //db sd < q ed , db ed > q sd --> çakışan rezervasyonlar

    const reservedCarIds = await Reservation.find({
      startDate: {$lte: endDate},
      endDate: {$gte: startDate},
      model
    }, {
      carId: 1,
      _id: 0
    }).distinct("carId")

    // const cars = await Car.find({$nin: reservedCarIds}) // $nin=not in
    // const cars = await Car.find({$nin: reservedCarIds}) 
    customFilter._id ={$nin: reservedCarIds} 
    // console.log(startDate, endDate);

    const data = await res.getModelList(Car, customFilter, ['createdId', "updatedId"]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Car, customFilter),
      // reservations
      data,
    });
  },

  create: async (req, res) => {
    /*
        #swagger.tags = ["Cars"]
        #swagger.summary = "Create Car"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                $ref:"#/definitions/Car"
            }
        }
    */
    // remove to Authentication middlevare
    // req.body.updateId = req.user._id
    // req.body.createId = req.user._id
    const data = await Car.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
        #swagger.tags = ["Cars"]
        #swagger.summary = "Get Single Car"
    */
    const data = await Car.findOne({ _id: req.params.id }).populate([
      {path: "createdId", select: "username"},
      {path: "updatedId", select: "username"}
    ])

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
        #swagger.tags = ["Cars"]
        #swagger.summary = "Update Car"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                $ref:"#/definitions/Car"
            }
        }
    */


    const data = await Car.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Car.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /*
        #swagger.tags = ["Cars"]
        #swagger.summary = "Delete Car"
    */

    const data = await Car.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
  destroy: async (req, res) => {
    /*
        #swagger.tags = ["Cars"]
        #swagger.summary = "Delete Car"
    */

    const data = await Car.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
