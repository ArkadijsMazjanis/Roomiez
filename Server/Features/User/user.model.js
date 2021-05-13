var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var usereSchema = new Schema({
    googleId   : String,
    isAdmin    : Boolean,
    email      : { type: String, lowercase: true, unique: true },
    name       : { type: String, lowercase: true, unique: true },
    lastLogin  : Date,
    creationDate : Date,
    password   : String
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('USER', userSchema, 'USER');
