const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


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


const authen = mongoose.model('User', authSchema);

module.exports = authen;
