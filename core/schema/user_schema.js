/**
 * created By f.putra 18/05/2018
 * this for create schema user on mongoDB
 */

let mongoose = require('../repository_config');

let userSchema = mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    password: String,
    created: Date
});

let User = mongoose.model('user', userSchema);

module.exports = User;
