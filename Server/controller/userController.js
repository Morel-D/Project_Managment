const User = require('../model/userModel');
const jwt = require('jsonwebtoken');


// function to generate web token

const creatoken = (_id) =>
{
    return jwt.sign({ _id }, process.env.SECRETE, { expiresIn: '3d' });
    }



// Login procedure

const userLogin = (req, res) => {
    res.json({messegs : 'Login complete'})
}


// Signup procedure 

const userSignup = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const user = await User.signup(userName, email, password)

        // Create the token

        const token = creatoken(user._id);


        res.status(200).json({ userName, email, token })
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }  
}

module.exports = 
{
    userLogin, userSignup
}