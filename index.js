'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/demo')
    .then(() => {
        console.log("Conectado a mongo!!");
        //CREAR SERVER
        app.listen(port, () =>{
            console.log("SERVER");
        })
    })
    .catch(err => console.log(err))