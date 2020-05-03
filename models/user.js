const mongoose = require('mongoose');
const User = mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 4
    },
    lastName: {
        type: String,
        required: true,
        min: 4
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    email: {
        type: String,
        required: true
    }
}));

module.exports = User;