const records = require('../model/model');
const mongoose = require('mongoose');


// POST date (CREATE)
const getData = async (req, res) =>
{
    const record = new records(req.body)
    record.save();

    records.find()
        .then((results) => {
        res.json(results)
    }).catch((error) => {
        // res.status(404).json(error)
    })
}   


// // GET all data (READ)
const getAllData = (req, res) => {
    records.find().sort({ createdAt: -1 })
        .then((results) => {
        res.json(results)
        }).catch((error) => {
    })
}


// GET single data

const getSingleData = (req, res) => {

    const id = mongoose.Types.ObjectId(req.params.id);
    records.findById(id)
        .then((results) => {
            res.json(results)
            
    }).catch((error) => {
        res.status(404).json(error)
    })
}


// DELETE single data

const deleteData = (req, res) => {

    const id = mongoose.Types.ObjectId(req.params.id);

    records.findByIdAndRemove(id)
        .then(results => {
        res.json(results)
        }).catch(error => {
            res.status(404).json(error)
            
    })
} 


const updateData = (req, res) => {
    
    const id = mongoose.Types.ObjectId(req.params.id);

    const newRecord = {
        userName: req.body.userName,
        workTitle: req.body.workTitle,
        startDate: req.body.startDate,
        finishDate: req.body.finishDate,
        comment: req.body.comment
    }

    records.findByIdAndUpdate(id, newRecord)
        .then(results => {
        res.json(results)
        }).catch(error => {
            res.status(404).json(error)
    })

}


module.exports = { getData, getAllData, getSingleData, deleteData, updateData }
