const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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

const authen = mongoose.model('User', authSchema);

module.exports = authen;
