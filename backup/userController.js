const User = require('../model/userModel');



// Login procedure

const userLogin = (req, res) => {
    res.json({messegs : 'Login complete'})
}


// Signup procedure 

const userSignup = async (req, res) => {
    const { userName, email, password } = req.body;

    try {
        const user = await User.signup(userName, email, password)
        res.status(200).json({ userName, user })
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }  
}

module.exports = 
{
    userLogin, userSignup
}