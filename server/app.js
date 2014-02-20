var fs = require('fs'),
    path = require('path'),
    http = require('http'),

    express = require('express'),
    socket = require('socket.io'),
    ejs = require('ejs'),

    app = module.exports = express(),
    server = http.createServer(app),
    io = socket.listen(server)

app.config = require('./config')

app.configure(function () {
	if (app.config.views)
		app
		.set('views', app.config.views)
		.engine('html', ejs.renderFile)
		.get('/', function (req, res) {
			res.render('index.html', app.config)
		})

	require('./modules')(app, io)
	
	if (app.config.staticDir) {
		app
		.use('/static', express.static(app.config.staticDir))
	}
})

console.log(app.config.DATABASE_URL)

app.start = function () {
	server.listen(app.config.PORT)
	console.log("Grapevine running in " + app.config.env + " mode on port " + app.config.PORT)
}
