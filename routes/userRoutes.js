'use strict'

var express = require('express');
var UserController = require('../controller/userController');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');


api.get('/home', UserController.fnHome);
api.post('/registerUser'/*, md_auth.ensureAuth*/, UserController.saveUser);
api.post('/loginUser', UserController.loginUser);
module.exports = api;