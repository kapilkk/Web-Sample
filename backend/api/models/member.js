const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    fullname: {
        type: String
    },
    mobile: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);