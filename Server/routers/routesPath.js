const express = require('express');

const routers = express.Router();

// CRUD Opertaion

// GET all data (READ)
routers.get('/', (req, res) => {
    res.json({msg: 'Get all data'})
})

// POST date (CREATE)
routers.post('/', (req, res) => {
    res.json({msg : "Insert some data"})
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