const express = require('express');
const controller = require('../controller/controller')
const requireAuth = require('../middleware/requireAuth');

const routers = express.Router();


// require auth for all projects 
routers.use(requireAuth); 


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