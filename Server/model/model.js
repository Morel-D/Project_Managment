const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const recordsSchema = new Schema(
    {
        userName: { type: String, required: true},
        workTitle: { type: String, required: true},
        startDate: { type: String, required: true},
        finishDate: { type: String, required: true},
        comment: { type: String, required: true },
        user_id: {type: String, required: true}
    },{timestamps: true}
);

const Record = mongoose.model('Report', recordsSchema);

module.exports = Record