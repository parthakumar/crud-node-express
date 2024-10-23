var mongoose = require('mongoose');
//var parthaSchema = require('./user1');
var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: String,
});
var user = new mongoose.model('parthiban', schema);
module.exports = user;