const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');


const authSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true,
            unique: true
        }
    }
)


// staitic signup method
authSchema.statics.signup = async function(userName, email, password)
{


    // Validation

    if (!email || !password || !userName)
    {
        throw Error('All feilds must be feild')
    }
    
    if (!validator.isEmail(email))
    {
        throw Error("Invalide Email")
    }
    
    if (!validator.isStrongPassword(password))
    {
        throw Error("Password not strong enough")
    }
    


    const exist = await this.findOne({ email })
    
    if (exist)
    {
        throw Error('Email already exist')
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ userName, email, password: hash })
    
    return user;

}



// Static login method

authSchema.statics.login = async function (email, password)
{
    // check for empty feilds
    if (!email || !password)
    {
        throw Error("All feilds must be filled")
    }
    
    const user = await this.findOne({ email });

    // check for valide email
    if (!user)
    {
        throw Error('Invalid Email')
    }
    
    const match = await bcrypt.compare(password, user.password)
    
    // Check for valide password
    if (!match)
    {
        throw Error('Invalide Password')
    }
    
    return user
    }


const authen = mongoose.model('User', authSchema);

module.exports = authen;
