const user = require('../model/userModel');


// Login procedure

const userLogin = (req, res) => {
    res.json({messegs : 'Login complete'})
}


// Signup procedure 

const userSignup = (req, res) => {
    res.json({message : 'SignUp procedure done'})
}

module.exports = 
{
    userLogin, userSignup
}