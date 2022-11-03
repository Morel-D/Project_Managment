require('dotenv').config();
const express = require('express');
const routePath = require('./routers/routesPath');


// Express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// Routes
app.use('/Records', routePath);


// Listening
app.listen(process.env.PORT, () => {
    console.log('The app is listening on port', process.env.PORT);
})