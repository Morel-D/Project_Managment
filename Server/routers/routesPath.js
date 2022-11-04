const express = require('express');
const routers = express.Router();
const controller = require('../controller/controller')


// CRUD Opertaion

// GET all data (READ)
routers.get('/', controller.getAllData)

// POST date (CREATE)
routers.post('/', controller.getData);

// GET single data
routers.get('/:id', controller.getSingleData)

// DELETE single data (DELETE)
routers.delete('/:id', controller.deleteData)

// UPDATE single data (UPDATE)
routers.patch('/:id', controller.updateData)



module.exports = routers;