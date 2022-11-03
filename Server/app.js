require('dotenv').config();
const express = require('express');
const routePath = require('./routers/routesPath');
const mongoose = require('mongoose');


// Express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Database Connection
mongoose.connect(process.env.DB_URL)
    .then(() => {
        // Listening
       app.listen(process.env.PORT, () => {
           console.log('The app is listening on port', process.env.PORT);
       })
    }).catch((error) => {
        console.log(error);
    })

// Routes
app.use('/Records', routePath);


