var fs = require('fs'),
    path = require('fs'),

    express = require('express'),
    socket = require('socket.io'),

    app = express()

app.config = require('./config')

app.configure('dev', function () {

})

app.configure(function () {
})
