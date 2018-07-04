'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    nombre: String,
    contacto: String,
    mail: String,
    telefono: String,
    password: String,
    role: String

})

module.exports = mongoose.model('User', UserSchema);