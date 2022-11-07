const epxress = require('express');
const user = require('../controller/userController');
const router = epxress.Router();

// User Authentication

// User login 
router.post('/login', user.userLogin);


// User signUp

router.post('/signup', user.userSignup);


module.exports = router;