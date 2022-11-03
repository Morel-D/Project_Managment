const express = require('express');
const routers = express.Router();
const records = require('../model/model');

// CRUD Opertaion

// GET all data (READ)
routers.get('/', (req, res) => {
    res.json({msg: 'Get all data'})
})

// POST date (CREATE)
routers.post('/', async (req, res) => {

    const { userName, workTitle, startDate, finishDate } = req.body;

    try {
        const report = await records.create({ userName, workTitle, startDate, finishDate });
        res.status(200).json(report);
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

// GET single data
routers.get('/:id', (req, res) => {
    res.json({msg : "Get single data"})
})

// DELETE single data (DELETE)
routers.delete('/:id', (req, res) => {
    res.json({msg: "Deleted the single data"})
})

// UPDATE single data (UPDATE)
routers.patch('/:id', (req, res) => {
    res.json({msg : "Data has been updated"})
})



module.exports = routers;