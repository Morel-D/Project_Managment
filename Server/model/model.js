const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const recordsSchema = new Schema(
    {
        userName: String,
        workTitle: String,
        startDate: String,
        finishDate: String,
        comment: String
    },{timestamps: true}
);

const Record = mongoose.model('Report', recordsSchema);

module.exports = Record